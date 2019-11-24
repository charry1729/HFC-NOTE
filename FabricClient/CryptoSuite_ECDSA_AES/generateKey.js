//https://www.notion.so/wjwu/generateKey-opts-6e3bbe50c90d4d32bb470defe1ba510b

var path = require('path');
var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var BaseClient = require('fabric-client/lib/BaseClient.js');
var store_path = path.join(__dirname, 'hfc-key-store');

var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]
var cryptoKeystore = BaseClient.newCryptoKeyStore({path: store_path});//newCryptoKeyStore({path: store_path})
cryptoSuite.setCryptoKeyStore(cryptoKeystore); // requires CryptoKeyStore to be set.
cryptoSuite.generateKey().then((priKey)=>{
    console.log(priKey);
})
