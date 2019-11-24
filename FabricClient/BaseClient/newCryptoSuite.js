//https://www.notion.so/wjwu/static-newCryptoSuite-setting-ba3d77adad644b4a8cbd7827042df053
var FabricCAServices = require('fabric-ca-client/lib/FabricCAClientImpl');
var BaseClient = require('fabric-client/lib/BaseClient.js');
var sett={
    software: true, //Whether to load a software-based implementation (true) or HSM implementation (false) default is true
    keysize: 'crypto-keysize', //The key size to use for the crypto suite instance. default is value of the setting 'crypto-keysize'
    algroithm:'EC',//Digital signature algorithm, currently supporting ECDSA only with value 'EC'
    hash:'SHA2'//'SHA2' or 'SHA3'
}

//var Basee = new BaseClient();
var cryptoSuite = BaseClient.newCryptoSuite();//[optional]sett]

console.log(cryptoSuite);
