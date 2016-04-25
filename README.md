# tiweb-api-mocks

## Quick start

Make sure you have [node.js](https://nodejs.org) installed:
If you're using OS X or Windows, the best way to install Node.js is to use one of the installers from nodejs.org.

### Install

##### Install dependencies:
```sh
$ npm install
```

### Run
```sh
$ node server
```

### API
Get all stream:
http://localhost:3000/stream

Get only jobs from stream:
http://localhost:3000/stream?postHeader.postType=Job

Slice:
http://localhost:3000/stream?_start=0&_limit=2

Get All news:
http://localhost:3000/news

Get All new by id:
http://localhost:3000/news?unique_id=news_MXmB5TgfJPmDPiNJGE95nm

Pagination:
http://localhost:3000/news?_start=0&_limit=5


