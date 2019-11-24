//https://www.notion.so/wjwu/Class-FabricCAClient-connect_opts-2d1d5ef147b2400db80fbaa1aad33576
//This is a constructor
//The module FabricCAClient of 'sdk-node-release-1.2'

var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var FabricCAClient = FabricCAServices.FabricCAClient;

//console.log(FabricCAServices);
//console.log(FabricCAClient)

let client = new FabricCAClient({protocol: 'http', hostname: '127.0.0.1', port: 7054});

console.log(client);