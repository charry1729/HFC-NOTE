//https://www.notion.so/wjwu/static-loadFromConfig-config-892bb2af04134fc489365bcc02f9b768

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
console.log(client);