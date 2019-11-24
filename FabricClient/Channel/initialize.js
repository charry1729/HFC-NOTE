let Fabric_Client = require('fabric-client');
Fabric_Client.setConfigSetting('initialize-with-discovery', true);
let fabric_client = Fabric_Client.loadFromConfig('../../../testConfig.json');

let clientConf = fabric_client.getClientConfig();
fabric_client.setAdminSigningIdentity(clientConf.organization.adminPrivateKeyPEM, clientConf.organization.signedCertPEM, clientConf.organization.mspid);

let channel =fabric_client.getChannel('mychannel');
channel.initialize().then((rs)=>{
    console.log(rs);
});