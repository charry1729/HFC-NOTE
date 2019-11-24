//https://www.penflip.com/WanjungWu/hyperledger-fabric-client/blob/master/channelpeer/discuessioin.txt
var path = require('path');
var fs = require('fs');
//////////////////////////////////////////////////////
//             CLIENT SETTING                     ////
//////////////////////////////////////////////////////

var Client = require('fabric-client');
Client.setConfigSetting('initialize-with-discovery', true);
const client = Client.loadFromConfig('../network.json');
//--------START-----setAdminSigningIdentity-------------
var storePath = path.join(__dirname, 'clientStore','keyStore');
let certData = "-----BEGIN CERTIFICATE-----\nMIICAjCCAaigAwIBAgIUDgT+gm1o/fAEPTUkOe2/oUq9h3QwCgYIKoZIzj0EAwIw\nczELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh\nbiBGcmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMT\nE2NhLm9yZzEuZXhhbXBsZS5jb20wHhcNMTgxMTI3MDgxOTAwWhcNMTkxMTI3MDgy\nNDAwWjAhMQ8wDQYDVQQLEwZjbGllbnQxDjAMBgNVBAMTBWFkbWluMFkwEwYHKoZI\nzj0CAQYIKoZIzj0DAQcDQgAERfE6t+SqAJ0T9qltm27wmuB3AyGYIRLdQ4X4diuz\nof5xX83KQT5rSett5vmknQQbU0OXIET73Tn6mU7Gg/mp1qNsMGowDgYDVR0PAQH/\nBAQDAgeAMAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYEFGwoXUef0LdhZwm6VMJbjZaw\nOAjaMCsGA1UdIwQkMCKAIHR9aCb+e3gE2fQ3gzhpnLoclRnBOZBiMxkB0JGhSq/G\nMAoGCCqGSM49BAMCA0gAMEUCIQCa0t5UXe8Gd9LUH1ZZl5SnQqnBEAI6ptPGv84M\nWoni7AIgW2yiwf5eILJ7tg/1Ibz9cJGmq/g/1xjOiTNwxCn2qcU=\n-----END CERTIFICATE-----\n";
let keyData = fs.readFileSync(storePath+'/5b512931fd20666a1c62cdee6e4f85c168ca0cc6a668b21acbc5a7391e69d800-priv');
let adminSigningIdentity ={
    cert: certData,
    key: Buffer.from(keyData).toString()
}
client.setAdminSigningIdentity(adminSigningIdentity.key,adminSigningIdentity.cert,'Org1MSP');

//----------END---setAdminSigningIdentity-------------

//////////////////////////////////////////////////////
//          END THE CLIENT SETTING              //////
//////////////////////////////////////////////////////

const channel =client.getChannel('mychannel');  //Get a Channel instance from the client instance
console.log(channel.getPeers()[1].getPeer());
console.log(channel.getPeers()[1].getUrl()); //grpcs://localhost:8051
console.log(channel.getPeers()[1].getChannelEventHub());
console.log(channel.getPeers()[1].getMspid());//Org2MSP
console.log(channel.getPeers()[1].getName());//peer0.org2.example.com
