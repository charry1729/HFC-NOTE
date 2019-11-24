//[getCertificateAuthority(name)](https://www.notion.so/f090f5e869be4e43bcf833681e971d86)

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');
var cryptoSuite = Client.newCryptoSuite();
client.setCryptoSuite(cryptoSuite);
var rs = client.getCertificateAuthority();
console.log(rs);
