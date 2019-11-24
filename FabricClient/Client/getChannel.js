//https://www.notion.so/wjwu/getChannel-name-throwError-8346b6e26c524521be863ec8bce29276
var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
console.log(client.getChannel());