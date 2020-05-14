
const { v4: uuid  } = require('uuid');
const express = require('express');
const app = express();
const redis = require('redis');
const keys = require('./keys.js')

const redisClient = redis.createClient({
    host: "myredisservice",
    port: 6379,
    retry_strategy: () => 1000
});

const appId = uuid();
const appPort = 5000;

console.log(keys);

app.get('/', (req, res) => {
    res.send(`[${appId}] ${keys.initMessage}`);
});

app.listen(appPort, err => {
    console.log(`Backend listening on port ${appPort}`);
});
