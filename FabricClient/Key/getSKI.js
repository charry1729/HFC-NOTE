//https://www.notion.so/wjwu/getSKI-eaa32c027995463e96d977e3da8c0dde

var path = require('path');
var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var BaseClient = require('fabric-client/lib/BaseClient.js');
var userStorePath = path.join(__dirname, '../clientStore','userKey');
var Client = require('fabric-client');
//----------------------------Parameters Area------------------------------

var client = new Client();
Client.newDefaultKeyValueStore({ path: userStorePath}).then((stateStore)=>{ //you can see the folder in the path that you have been assigned
    client.setStateStore(stateStore);
    var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]
    var cryptoKeystore = BaseClient.newCryptoKeyStore({path: userStorePath});//newCryptoKeyStore({path: userStorePath})
    cryptoSuite.setCryptoKeyStore(cryptoKeystore); // requires CryptoKeyStore to be set.
    client.setCryptoSuite(cryptoSuite);
    return client.getUserContext('testUser1', true);
}).then((user) => {
    console.log(user.getSigningIdentity()._signer._key.getSKI());
});
