//https://www.notion.so/wjwu/getCryptoSuite-011ad55d1f134f30aff95e862ab88410

var Client = require('fabric-client');
var cryptoSuite = Client.newCryptoSuite();
var client = new Client();
client.setCryptoSuite(cryptoSuite);
console.log(client.getCryptoSuite());