//https://www.notion.so/wjwu/isDevMode-d60ce3c052ee48249f4bfb664e6237c6

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
console.log(client.isDevMode());