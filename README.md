# Project Name

> Scalable backend and system design for a restaurant reservation web application.  

Inherited legacy codebase and redesigned a scalable backend, in order to achieve web-scale traffic
Increased throughput by 1000% to 1880 RPS utilizing horizontal scaling (6 AWS EC2 machines and 3 database replications), an NGINX load balancer, and a Redis Cache
Benchmarked PostgreSQL and MongoDB with databases of 140 million records to determine optimal query performance for my microservice


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

#### Instructions

To access the module, please go to:

> http://localhost:8888/

###### Database

1) The purpose of this project was to inherit a front-end applicationa and redesign a scalable back-end/system design.  If you want to run the data generation script it will take several hours, as it generates 140 million records.

2) run 'npm run generate-data' if you wish to do so.

3) You will need to create your own AWS S3 bucket for the photos.  As I have taken my bucket down for financial reasons.

###### Client
`npm run react-dev` to run webpack and watch

###### Server
`npm run server` to start the server

###### Test
`npm run test-watch` to run tests

###### Static File

Please include the following link in your index.html:

```
<link href="https://fonts.googleapis.com/css?family=Istok+Web:400,400i,700,700i" rel="stylesheet">
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Nodemon
- Webpack

## Development

### Installing Dependencies

From within the root directory:

```
npm install -g webpack
npm install -g nodemon
npm install
```

