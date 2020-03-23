const express = require('express');
const port = 3000;
const app = express();

const logger = require('logplease')
const logger1 = logger.create("failure");
const logger2 = logger.create("success");
logger.setLogfile('debug.log');

app.get('/', (request, response)=> {
    response.send('Congrats you\'re using your first Node.js and Express as a Web Server');
});

app.listen(port, (error)=> {
    if(error) {
        logger1.debug(`Unable to start the server on port: ${port}.`);
    }
 logger2.debug(`This HTTP server is running on port ${port}.`);
});