//https://www.notion.so/wjwu/static-newCryptoKeyStore-KVSImplClass-opts-ed624da63cda4e7995d8051f8a3430d6
var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var BaseClient = require('fabric-client/lib/BaseClient.js');
//var store_path = path.join(__dirname, 'hfc-key-store');

//var Basee = new BaseClient();
var cryptoKeystore = BaseClient.newCryptoKeyStore();//newCryptoKeyStore({path: store_path})
console.log(cryptoKeystore);