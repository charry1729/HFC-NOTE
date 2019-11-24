//https://www.notion.so/wjwu/setCryptoKeyStore-cryptoKeyStore-8e5d252fd8e344178111155f7df56f31

var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var BaseClient = require('fabric-client/lib/BaseClient.js');
//var store_path = path.join(__dirname, 'hfc-key-store');

//var Basee = new BaseClient();
var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]
var cryptoKeystore = BaseClient.newCryptoKeyStore();//newCryptoKeyStore({path: store_path})
cryptoSuite.setCryptoKeyStore(cryptoKeystore);
console.log(cryptoSuite);