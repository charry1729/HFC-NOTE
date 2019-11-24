//https://www.notion.so/wjwu/getClientConfig-c2f37599c1d94f32acc0555fd490b10d

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
console.log(client.getClientConfig());