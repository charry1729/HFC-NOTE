//https://www.notion.so/wjwu/addPeer-peer-mspid-roles-replace-7bb139b9290546f5b8f535e58ab34204

var Client = require('fabric-client');
var client =new Client();
var channel =client.newChannel('mychannel');
var connectionUrl='grpc://localhost:7051';
const peer1 = client.newPeer(connectionUrl);

var mspid='Org1MSP';
var roles={
    endorsingPeer:true, //Default: true
    chaincodeQuery:true,//Default: true
    ledgerQuery:true,//Default: true
    eventSource:true,//Default: true
    discover:true//Default: true
};

var replace=false;//If a peer exist with the same name, replace with this one.


channel.addPeer(peer1,mspid,roles,replace);//[optional]roles
console.log(channel);
