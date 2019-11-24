//https://www.notion.so/wjwu/async-loadUserFromStateStore-name-ef6f02ab1e3249d19a182d6a528cf2fb

var path = require('path');
var Client = require('fabric-client');

const client = new Client();
var adminKeyPath = path.join(__dirname, '../','/clientStore/adminKey/');

Client.newDefaultKeyValueStore({ path: adminKeyPath
}).then((stateStore) => {
    client.setStateStore(stateStore);
    let cryptoSuite = Client.newCryptoSuite();
    let cryptoStore = Client.newCryptoKeyStore({path: adminKeyPath});
    cryptoSuite.setCryptoKeyStore(cryptoStore);
    client.setCryptoSuite(cryptoSuite);
    return client.loadUserFromStateStore('admin');
}).then((loadUser) => {
    console.log(loadUser);
});