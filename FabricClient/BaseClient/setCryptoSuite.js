//https://www.notion.so/wjwu/setCryptoSuite-cryptoSuite-227ad46da8964bf89671c832d492c6ba

var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var BaseClient = require('fabric-client/lib/BaseClient.js');
var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]
var cryptoKeystore = BaseClient.newCryptoKeyStore();//newCryptoKeyStore(store_path)
cryptoSuite.setCryptoKeyStore(cryptoKeystore);

var baseClient = new BaseClient;
baseClient.setCryptoSuite(cryptoSuite);
console.log(baseClient);