//https://www.notion.so/wjwu/setAdminSigningIdentity-private_key-certificate-mspid-1ca6c39a4f144132aa7a2a67e432b8ef

var path = require('path');
var fs = require('fs');
var Client = require('fabric-client');
var storePath = path.join(__dirname, 'clientStore','keyStore');
let certData = "-----BEGIN CERTIFICATE-----\nMIICAjCCAaigAwIBAgIUDgT+gm1o/fAEPTUkOe2/oUq9h3QwCgYIKoZIzj0EAwIw\nczELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh\nbiBGcmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMT\nE2NhLm9yZzEuZXhhbXBsZS5jb20wHhcNMTgxMTI3MDgxOTAwWhcNMTkxMTI3MDgy\nNDAwWjAhMQ8wDQYDVQQLEwZjbGllbnQxDjAMBgNVBAMTBWFkbWluMFkwEwYHKoZI\nzj0CAQYIKoZIzj0DAQcDQgAERfE6t+SqAJ0T9qltm27wmuB3AyGYIRLdQ4X4diuz\nof5xX83KQT5rSett5vmknQQbU0OXIET73Tn6mU7Gg/mp1qNsMGowDgYDVR0PAQH/\nBAQDAgeAMAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYEFGwoXUef0LdhZwm6VMJbjZaw\nOAjaMCsGA1UdIwQkMCKAIHR9aCb+e3gE2fQ3gzhpnLoclRnBOZBiMxkB0JGhSq/G\nMAoGCCqGSM49BAMCA0gAMEUCIQCa0t5UXe8Gd9LUH1ZZl5SnQqnBEAI6ptPGv84M\nWoni7AIgW2yiwf5eILJ7tg/1Ibz9cJGmq/g/1xjOiTNwxCn2qcU=\n-----END CERTIFICATE-----\n";
let keyData = fs.readFileSync(storePath+'/5b512931fd20666a1c62cdee6e4f85c168ca0cc6a668b21acbc5a7391e69d800-priv');
let adminSigningIdentity ={
    cert: certData,
    key: Buffer.from(keyData).toString()
}
const client = Client.loadFromConfig('../network.json');
client.setAdminSigningIdentity(adminSigningIdentity.key,adminSigningIdentity.cert,'Org1MSP');
console.log(client);