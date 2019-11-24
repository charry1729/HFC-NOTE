var Fabric_Client = require('fabric-client');

const fabric_client = Fabric_Client.loadFromConfig('../../../testArea/testConfig.json');

let clientConf = fabric_client.getClientConfig();
fabric_client.setAdminSigningIdentity(clientConf.organization.adminPrivateKeyPEM, clientConf.organization.signedCertPEM, clientConf.organization.mspid);

let channel =fabric_client.getChannel('mychannel');

channel.getChannelConfigFromOrderer().then((rs)=>{
    console.log('getChannelConfigFromOrderer****************************');
    console.dir(rs.config.channel_group.groups.field);
});