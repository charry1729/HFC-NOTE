//https://www.notion.so/wjwu/setDevMode-devMode-d13ce70c589f4944a9e65b3dd6232f93

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
client.setDevMode(true);
console.log(client);