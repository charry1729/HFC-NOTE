//https://www.notion.so/wjwu/getPeersForOrg-mspid-3433102c2e9749bd8b14a4a845882ec8

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
console.log(client.getPeersForOrg());