var path = require('path');
var Fabric_Client = require('fabric-client');
const fabric_client = Fabric_Client.loadFromConfig('testConfig.json');

var member_user = null;
var store_path = path.join(__dirname, '../clientStore', 'adminKey');
var tx_id = null;

let clientConf = fabric_client.getClientConfig();
fabric_client.setAdminSigningIdentity(clientConf.organization.adminPrivateKeyPEM, clientConf.organization.signedCertPEM, clientConf.organization.mspid);


let channel =fabric_client.getChannel('mychannel');
channel.initialize();
var targets = channel.getPeersForOrg('Org1MSP');

Fabric_Client.newDefaultKeyValueStore({ path: store_path
}).then((state_store) => {

    fabric_client.setStateStore(state_store);
    var crypto_suite = Fabric_Client.newCryptoSuite();

    var crypto_store = Fabric_Client.newCryptoKeyStore({path: store_path});
    crypto_suite.setCryptoKeyStore(crypto_store);
    fabric_client.setCryptoSuite(crypto_suite);

    return fabric_client.getUserContext('adminOrg1', true);
}).then((user_from_store) => {

    if (user_from_store && user_from_store.isEnrolled()) {
        console.log('Successfully loaded admin from persistence');
        member_user = user_from_store;
    } else {
        throw new Error('Failed to get admin.... run registerUser.js');
    }

    tx_id = fabric_client.newTransactionID();
    console.log("Assigning transaction_id: ", tx_id._transaction_id);


    var request = {
        //targets: let default to the peer assigned to the client
        targets:targets,
        chaincodeId: 'fabcar',
        fcn: 'changeCarOwner',
        args: ['CAR100','10'],
        chainId: 'mychannel',
        txId: tx_id
    };

    console.log('sendTransactionProposal');
    // send the transaction proposal to the peers
    return channel.sendTransactionProposal(request);
}).then((results) => {
    var proposalResponses = results[0];
    var proposal = results[1];
    console.log('verify****************************');
    console.log(channel.verifyProposalResponse(proposalResponses[0]));
});