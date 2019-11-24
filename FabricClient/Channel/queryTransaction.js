var fs = require('fs');
var path = require('path');
//var grpc = require('grpc');
var Fabric_Client = require('fabric-client');
var util = require('util');


const fabric_client = Fabric_Client.loadFromConfig('testConfig.json');
//--------START-----setAdminSigningIdentity & setTlsClientCertAndKey-------------
//var mspProto = grpc.load(path.join(__dirname, 'msp_config.proto')).msp;



var member_user = null;
var store_path = path.join(__dirname, '../clientStore', 'adminKey');
var tx_id = null;

let clientConf = fabric_client.getClientConfig();
fabric_client.setAdminSigningIdentity(clientConf.organization.adminPrivateKeyPEM, clientConf.organization.signedCertPEM, clientConf.organization.mspid);


let channel =fabric_client.getChannel('mychannel');
channel.initialize();
var targets = channel.getPeersForOrg('Org1MSP');
//console.log('client****************************');
//console.log(fabric_client);



//var msp_manager = new MSPManager();
//msp_manager.addMSP();
//channel.setMSPManager(msp_manager);
//console.log(channel);
//channel.initialize();
//console.log('//////////////////////////');
//channel.getChannelConfigFromOrderer().then((rs)=>{console.log();});

//console.log(fabric_client.getClientConfig().organization.mspid);






// create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
Fabric_Client.newDefaultKeyValueStore({ path: store_path
}).then((state_store) => {
    // assign the store to the fabric client
    fabric_client.setStateStore(state_store);
    var crypto_suite = Fabric_Client.newCryptoSuite();
    // use the same location for the state store (where the users' certificate are kept)
    // and the crypto store (where the users' keys are kept)
    var crypto_store = Fabric_Client.newCryptoKeyStore({path: store_path});
    crypto_suite.setCryptoKeyStore(crypto_store);
    fabric_client.setCryptoSuite(crypto_suite);

    // get the enrolled user from persistence, this user will sign all requests
    return fabric_client.getUserContext('adminOrg1', true);
}).then((user_from_store) => {
    //console.log('user_from_store****************************');
    //console.log(user_from_store.getSigningIdentity());




    //fabric_client.setAdminSigningIdentity(user_from_store.getIdentity());


    if (user_from_store && user_from_store.isEnrolled()) {
        console.log('Successfully loaded admin from persistence');
        member_user = user_from_store;
    } else {
        throw new Error('Failed to get admin.... run registerUser.js');
    }

    // get a transaction id object based on the current user assigned to fabric client
    tx_id = fabric_client.newTransactionID();
    console.log("Assigning transaction_id: ", tx_id._transaction_id);


    // createCar chaincode function - requires 5 args, ex: args: ['CAR12', 'Honda', 'Accord', 'Black', 'Tom'],
    // changeCarOwner chaincode function - requires 2 args , ex: args: ['CAR10', 'Barry'],
    // must send the proposal to endorsing peers
    // send the transaction proposal to the peers
    return channel.queryTransaction('ba6f863b7d583622635da3482207ca869f7cf256281a8e88c23fdab1ca5ac3eb');
}).then((results) => {
    console.log(results);
})
