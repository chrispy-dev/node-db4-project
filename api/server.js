const express = require('express');
const cookbookRouter = require('./cookbook/cookbookRouter');

const server = express();

server.use(express.json());
server.use('/api/cookbook', cookbookRouter);

module.exports = server;