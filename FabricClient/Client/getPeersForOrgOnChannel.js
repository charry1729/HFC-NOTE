//https://www.notion.so/wjwu/getPeersForOrgOnChannel-956347c283bc480e8b5b48b1cb626598

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
console.log(client.getPeers('mychannel'));
