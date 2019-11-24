//https://www.notion.so/wjwu/async-setUserContext-user-skipPersistence-71e2bbf25c3440238b9c325443eddb9b

var path = require('path');
var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var BaseClient = require('fabric-client/lib/BaseClient.js');
var userStorePath = path.join(__dirname, '../clientStore','userKey');
var User = require('fabric-client/lib/User.js');
var Client = require('fabric-client');
//----------------------------Parameters Area------------------------------
var memberName = 'testUser1';
var certPEM = '-----BEGIN CERTIFICATE-----' +
    'MIIDVDCCAvqgAwIBAgIBATAKBggqhkjOPQQDAjBOMRMwEQYDVQQKDArOoyBBY21l' +
    'IENvMRkwFwYDVQQDExB0ZXN0LmV4YW1wbGUuY29tMQ8wDQYDVQQqEwZHb3BoZXIx' +
    'CzAJBgNVBAYTAk5MMB4XDTE2MTIxNjIzMTAxM1oXDTE2MTIxNzAxMTAxM1owTjET' +
    'MBEGA1UECgwKzqMgQWNtZSBDbzEZMBcGA1UEAxMQdGVzdC5leGFtcGxlLmNvbTEP' +
    'MA0GA1UEKhMGR29waGVyMQswCQYDVQQGEwJOTDBZMBMGByqGSM49AgEGCCqGSM49' +
    'AwEHA0IABFKnXh7hBdp6s9OJ/aadigT1z2WzBbSc7Hzb3rkaWFz4e+9alqqWg9lr' +
    'ur/mDYzG9dudC8jFjVa7KIh+2BxgBayjggHHMIIBwzAOBgNVHQ8BAf8EBAMCAgQw' +
    'JgYDVR0lBB8wHQYIKwYBBQUHAwIGCCsGAQUFBwMBBgIqAwYDgQsBMA8GA1UdEwEB' +
    '/wQFMAMBAf8wDQYDVR0OBAYEBAECAwQwDwYDVR0jBAgwBoAEAQIDBDBiBggrBgEF' +
    'BQcBAQRWMFQwJgYIKwYBBQUHMAGGGmh0dHA6Ly9vY0JDQ1NQLmV4YW1wbGUuY29t' +
    'MCoGCCsGAQUFBzAChh5odHRwOi8vY3J0LmV4YW1wbGUuY29tL2NhMS5jcnQwRgYD' +
    'VR0RBD8wPYIQdGVzdC5leGFtcGxlLmNvbYERZ29waGVyQGdvbGFuZy5vcmeHBH8A' +
    'AAGHECABSGAAACABAAAAAAAAAGgwDwYDVR0gBAgwBjAEBgIqAzAqBgNVHR4EIzAh' +
    'oB8wDoIMLmV4YW1wbGUuY29tMA2CC2V4YW1wbGUuY29tMFcGA1UdHwRQME4wJaAj' +
    'oCGGH2h0dHA6Ly9jcmwxLmV4YW1wbGUuY29tL2NhMS5jcmwwJaAjoCGGH2h0dHA6' +
    'Ly9jcmwyLmV4YW1wbGUuY29tL2NhMS5jcmwwFgYDKgMEBA9leHRyYSBleHRlbnNp' +
    'b24wCgYIKoZIzj0EAwIDSAAwRQIgcguBb6FUxO+X8DbY17gpqSGuNC4NT4BddPg1' +
    'UWUxIC0CIQDNyHQAwzhw+512meXRwG92GfpzSBssDKLdwlrqiHOu5A==' +
    '-----END CERTIFICATE-----';

//------------------------End Parameters Area------------------------------
var client = new Client();

Client.newDefaultKeyValueStore({ path: userStorePath}).then((stateStore)=>{ //you can see the folder in the path that you have been assigned
    client.setStateStore(stateStore);
    var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]
    var cryptoKeystore = BaseClient.newCryptoKeyStore({path: userStorePath});//newCryptoKeyStore({path: userStorePath})
    cryptoSuite.setCryptoKeyStore(cryptoKeystore); // requires CryptoKeyStore to be set.

    var member = new User(memberName);
    member.setCryptoSuite(cryptoSuite);
    cryptoSuite.generateKey().then((priKey)=>{
        // the private key and cert don't match, but it's ok, the code doesn't check
        return member.setEnrollment(priKey, certPEM, 'Org1MSP');//(privateKey, certificate, mspId, skipPersistence)
    }).then(()=>{
        var id = member.getIdentity(); //after setEnrollment, you can get the userIdentity
        client.setUserContext(member, false);//(user, skipPersistence)
        console.log(client);
    })
});



/*skipPersistence=true
*

var client = new Client();

var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]
var cryptoKeystore = BaseClient.newCryptoKeyStore({path: userStorePath});//newCryptoKeyStore({path: userStorePath})
cryptoSuite.setCryptoKeyStore(cryptoKeystore); // requires CryptoKeyStore to be set.

var member = new User(memberName);
member.setCryptoSuite(cryptoSuite);
cryptoSuite.generateKey().then((priKey)=>{
    // the private key and cert don't match, but it's ok, the code doesn't check
    return member.setEnrollment(priKey, certPEM, 'Org1MSP');//(privateKey, certificate, mspId, skipPersistence)
}).then(()=>{
    client.setUserContext(member, true);//(user, skipPersistence)
    console.log(client);
})



*
* */



/*Implementation
*

var path = require('path');
var Client = require('fabric-client');
var userStorePath = path.join(__dirname,'clientStore' ,'userKeyStore');
const client = Client.loadFromConfig('../network.json');
var fabricClient = new Client();
Client.newDefaultKeyValueStore({ path: userStorePath
}).then((stateStore) => {
    fabricClient.setStateStore(stateStore);
    var cryptoSuite = Client.newCryptoSuite();
    var cryptoStore = Client.newCryptoKeyStore({path: userStorePath});
    cryptoSuite.setCryptoKeyStore(cryptoStore);
    fabricClient.setCryptoSuite(cryptoSuite);
    return fabricClient.getUserContext('testUser1', true);
}).then((userFromStore) => {
    client.setUserContext(userFromStore,true);
    console.log(client);
});

*
* */