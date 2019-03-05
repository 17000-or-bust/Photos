const moment = require('moment');
const { Readable } = require('stream');
const { createWriteStream } = require('fs');

// Run this script with npm run generate-data

// Instead of the first script made, this script ensures that the writable buffer is flushed out before the readable buffer is allowed to fill again.  This process is important because reads are much faster than writes.  The fastest chunk size that was found was to be 1,000.  I will need to run this script for approximately 100 million rows because that is how many photos a restaraunt will have.  I will test at 10 million rows.

// I want to mess around with the faker data to see if I can get the generation faster.  Currently it takes close to 10 minutes to generate 10 million records because my table contains a lot of text.  At that rate it will take over 90 minutes to complete 100 million rows.
class DataGenerator {
  constructor(rowGenerator, CHUNK_SIZE, MAX_ROWS, filepath) {
    this.readable = new ReadableRunner(rowGenerator, CHUNK_SIZE, MAX_ROWS, filepath);
    this.writable = createWriteStream(filepath);
    this.CHUNK_SIZE = CHUNK_SIZE || 1000;
    this.MAX_ROWS = MAX_ROWS || 140 * 1000 * 1000;
    this.filepath = filepath;
  }

  // Pipe connects a readable stream with a writeable stream such that the writeable stream will read from the readable streams buffer.  will read from readable buffer, populate its own buffer with that data and then at its own speed will write from its buffer to the destination file.

  generate() {
    this._writeInitialLogs();
    this.readable.pipe(this.writable);
  }

  // Console logs to ensure that the proper chunk size, filepath and max rows are being generated.

  _writeInitialLogs() {
    console.log(`Starting ${moment().format('HH:mm:ss')}`);
    console.log(`CHUNK_SIZE: ${this.CHUNK_SIZE}`);
    console.log(`MAX_ROWS: ${this.MAX_ROWS}`);
    console.log(`Output filepath: ${this.filepath}`);
  }
}

class ReadableRunner extends Readable {
  constructor(rowGenerator, CHUNK_SIZE, MAX_ROWS, filepath) {
    super();
    this.CHUNK_SIZE = CHUNK_SIZE || 1000;
    this.MAX_ROWS = MAX_ROWS || 140 * 1000 * 1000;
    this.rowGenerator = rowGenerator;
    this.filepath = filepath;
    this.lastUsedId = 0;
    this.progressBar = 25;
    this.startTime = moment();
  }

  // writable will call read when readables buffer is empty or available to be written again
  // the read method internally calls undscore read which we have rewritten here.  It fills the buffer again.

  _read() {
    if (this.lastUsedId + 1 >= this.MAX_ROWS) {
      this.push(null);
    } else {
      let buffer = '';
      for (let i = 0; i < this.CHUNK_SIZE; i++) {
        buffer += `${this.lastUsedId},${this.rowGenerator()}\n`;
        this.lastUsedId++;
      }
      this.push(buffer);
      this._logPercentComplete();
    }
  }

  // More logs to check the percentage progress of the data generation
  // Shows percentage complete and the current time.
  // This time can be compared to the initial console.log time.

  _logPercentComplete() {
    const percent = ((this.lastUsedId / this.MAX_ROWS) * 100).toFixed(2);
    const dollarSign = this._getHashes(percent);
    const spaces = this._getEmptySpaces(dollarSign);
    const time = moment().format('HH:mm:ss');
    const meta = `${time} : ${this.filepath}`;
    const complete = `Data generation: |${dollarSign}${spaces}| ${percent}% Complete`;

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    if (percent === '100.00') {
      process.stdout.write(`${meta} : ${complete}\n`);
      console.log(`Success. Total Time ${this.startTime.format('HH:mm:ss')}: ${moment().diff(this.startTime, 'seconds')} seconds\n`);
    } else {
      process.stdout.write(`${time} : ${complete}`);
    }
  }

  // Creates the dollar signs in the console.

  _getHashes(percent) {
    return '$'.repeat(Math.floor(percent / (100 / this.progressBar)));
  }

  _getEmptySpaces(dollarSign) {
    return ' '.repeat(this.progressBar - dollarSign.length);
  }
}

module.exports = DataGenerator;
