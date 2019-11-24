//following are the hard code of SDK setting flow...
var path = require('path');
var fs = require('fs');
var Client = require('fabric-client');
var BaseClient = require('fabric-client/lib/BaseClient.js');
Client.addConfigFile('../config.json');


//////////////////////////////////////////////////////
//First , you need to setting the client object / ////
//////////////////////////////////////////////////////

const client = Client.loadFromConfig('../network.json');
//--------START-----setAdminSigningIdentity & setTlsClientCertAndKey-------------
var userStorePath = path.join(__dirname, '../clientStore','userKey');
var storePath = path.join(__dirname, '../clientStore','adminKey');
var tlsClientCertPath = path.join(__dirname, '../clientStore','tlsCA');

let certData = "-----BEGIN CERTIFICATE-----\nMIICAjCCAaigAwIBAgIUDgT+gm1o/fAEPTUkOe2/oUq9h3QwCgYIKoZIzj0EAwIw\nczELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh\nbiBGcmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMT\nE2NhLm9yZzEuZXhhbXBsZS5jb20wHhcNMTgxMTI3MDgxOTAwWhcNMTkxMTI3MDgy\nNDAwWjAhMQ8wDQYDVQQLEwZjbGllbnQxDjAMBgNVBAMTBWFkbWluMFkwEwYHKoZI\nzj0CAQYIKoZIzj0DAQcDQgAERfE6t+SqAJ0T9qltm27wmuB3AyGYIRLdQ4X4diuz\nof5xX83KQT5rSett5vmknQQbU0OXIET73Tn6mU7Gg/mp1qNsMGowDgYDVR0PAQH/\nBAQDAgeAMAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYEFGwoXUef0LdhZwm6VMJbjZaw\nOAjaMCsGA1UdIwQkMCKAIHR9aCb+e3gE2fQ3gzhpnLoclRnBOZBiMxkB0JGhSq/G\nMAoGCCqGSM49BAMCA0gAMEUCIQCa0t5UXe8Gd9LUH1ZZl5SnQqnBEAI6ptPGv84M\nWoni7AIgW2yiwf5eILJ7tg/1Ibz9cJGmq/g/1xjOiTNwxCn2qcU=\n-----END CERTIFICATE-----\n";
let keyData = fs.readFileSync(storePath+'/5b512931fd20666a1c62cdee6e4f85c168ca0cc6a668b21acbc5a7391e69d800-priv');
let adminSigningIdentity ={
    cert: certData,
    key: Buffer.from(keyData).toString()
}
certData = fs.readFileSync(tlsClientCertPath+'/tlsca.org1.example.com-cert.pem');
keyData = fs.readFileSync(tlsClientCertPath+'/7cbd123c3a4019b0a9ecfdbd177927a227c9dac0fc1b8ad88eece0eaca65a8da_sk');
let tlsClient ={
    cert: Buffer.from(certData).toString(),
    key: Buffer.from(keyData).toString()
}

client.setAdminSigningIdentity(adminSigningIdentity.key,adminSigningIdentity.cert,'Org1MSP');
client.setTlsClientCertAndKey(tlsClient.cert, tlsClient.key);

//----------END---setAdminSigningIdentity & setTlsClientCertAndKey-------------
var cryptoSuite = Client.newCryptoSuite();
client.setCryptoSuite(cryptoSuite);
client.setDevMode(true);

//--------START----- setUserContext-------------
Client.newDefaultKeyValueStore({ path: userStorePath}).then((stateStore)=>{ //you can see the folder in the path that you have been assigned
    client.setStateStore(stateStore);
    var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]
    var cryptoKeystore = BaseClient.newCryptoKeyStore({path: userStorePath});//newCryptoKeyStore({path: userStorePath})
    cryptoSuite.setCryptoKeyStore(cryptoKeystore); // requires CryptoKeyStore to be set.
    client.setCryptoSuite(cryptoSuite);
    return client.getUserContext('testUser1', true);
}).then((userFromStateStore) => {
    //console.log(userFromStateStore);
});
//--------END----- setUserContext-------------


//////////////////////////////////////////////////////
//END THE CLIENT SETTING // START CHANNEL SETTING ////
//////////////////////////////////////////////////////


//--------START-----new Channel-------------
const channel =client.getChannel('mychannel');  //Get a Channel instance from the client instance


channel.initialize({
    discover: true,
    target: 'peer0.org1.example.com',//[optional]peer defined in the connection profile
    asLocalhost:true//[optional] when running a docker composed fabric network on the local system
}).then(()=>{
    console.log(channel);
});
//console.log(client.getConfigSetting('initialize-with-discovery'));
//--------END----- new Channel-------------
