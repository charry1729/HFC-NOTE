//https://www.notion.so/wjwu/newChannel-name-ef1af2a45a2345dbb35f5ba6e99772bd

var Client = require('fabric-client');
var client = new Client();
var channel = client.newChannel('mychannel');
console.log(channel);