//https://www.notion.so/wjwu/Class-IdentityService-d89ba9f36d154400bb67689c8c28a74e
var IdentityService = require('fabric-ca-client/lib/IdentityService.js');
var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var FabricCAClient = FabricCAServices.FabricCAClient;

let client = new FabricCAClient({protocol: 'http', hostname: '127.0.0.1', port: 7054}); ////This is a constructor
let identity = new IdentityService(client); //and creates a new identityService object.
console.log(identity);