const moment = require('moment');
const { Readable } = require('stream');
const { createWriteStream } = require('fs');

class DataGenerator {
  constructor(rowGenerator, CHUNK_SIZE, MAX_ROWS, filepath) {
    this.readable = new ReadableRunner(rowGenerator, CHUNK_SIZE, MAX_ROWS, filepath);
    this.writable = createWriteStream(filepath);
    this.CHUNK_SIZE = CHUNK_SIZE || 1000;
    this.MAX_ROWS = MAX_ROWS || 10 * 1000 * 1000;
    this.filepath = filepath;
  }

  generate() {
    this._writeInitialLogs();
    this.readable.pipe(this.writable);
  }

  //Pipe connects a readable stream with a writeable stream such that the writeable stream will read from the readable streams buffer.  will read from readable buffer, populate its own buffer with that data and then at its own speed will write from its buffer to the destination file.

  _writeInitialLogs() {
    console.log('------------------------------');
    console.log('Data Generation Script');
    console.log(`Starting generator at ${moment().format('HH:mm:ss')}`);
    console.log(`CHUNK_SIZE: ${this.CHUNK_SIZE}`);
    console.log(`MAX_ROWS: ${this.MAX_ROWS}`);
    console.log(`Output filepath: ${this.filepath}`);
    console.log('------------------------------');
  }
}

class ReadableRunner extends Readable {
  constructor(rowGenerator, CHUNK_SIZE, MAX_ROWS, filepath) {
    super();
    this.CHUNK_SIZE = CHUNK_SIZE || 1000;
    this.MAX_ROWS = MAX_ROWS || 10 * 1000 * 1000;
    this.rowGenerator = rowGenerator;
    this.filepath = filepath;
    this.lastUsedId = 0;
    this.progressBarLength = 25;
    this.startTime = moment();
  }
//writable will call read when readables buffer is empty or available to be written again
//the read method internally calls undscore read which we have rewritten here.  It fills the buffer again.

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

  _logPercentComplete() {
    const currPercent = ((this.lastUsedId / this.MAX_ROWS) * 100).toFixed(2);
    const hashes = this._getHashes(currPercent);
    const spaces = this._getEmptySpaces(hashes);
    const timestamp = moment().format('HH:mm:ss');
    const meta = `${timestamp} : ${this.filepath}`;
    const progressBar = `Data generation: |${hashes}${spaces}| ${currPercent}% Complete`;

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    if (currPercent === '100.00') {
      process.stdout.write(`${meta} : ${progressBar}\n`);
      console.log(`Success. Elapsed time since ${this.startTime.format('HH:mm:ss')}: ${moment().diff(this.startTime, 'seconds')} seconds\n`);
    } else {
      process.stdout.write(`${timestamp} : ${progressBar}`);
    }
  }

  _getHashes(currPercent) {
    return '#'.repeat(Math.floor(currPercent / (100 / this.progressBarLength)));
  }

  _getEmptySpaces(hashes) {
    return ' '.repeat(this.progressBarLength - hashes.length);
  }
}

module.exports = DataGenerator;
