//https://www.notion.so/wjwu/setCryptoSuite-cryptoSuite-dcc38ce53828451893d5cb4cbe5c7896

var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var BaseClient = require('fabric-client/lib/BaseClient.js');
var User = require('fabric-client/lib/User.js');

var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]
var cryptoKeystore = BaseClient.newCryptoKeyStore();//newCryptoKeyStore({path: store_path})
cryptoSuite.setCryptoKeyStore(cryptoKeystore);

var member = new User('test2member1');
member.setCryptoSuite(cryptoSuite);