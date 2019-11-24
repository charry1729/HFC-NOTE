//https://www.notion.so/wjwu/setCryptoSuite-cryptoSuite-759ef1ea081a4f0c8638b934e6bda574

var Client = require('fabric-client');
var cryptoSuite = Client.newCryptoSuite();
var client = new Client();
client.setCryptoSuite(cryptoSuite);
console.log(client);