//https://www.notion.so/wjwu/getMspid-f155d3fae595406b8f86842c0be63b01

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
console.log(client.getMspid());