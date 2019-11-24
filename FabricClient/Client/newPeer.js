//https://www.notion.so/wjwu/newPeer-url-opts-d1c19910ec4a44ce8e4f7a91227dd633

var path = require('path');
var fs = require('fs');
var Client = require('fabric-client');
var client =new Client();

var peerCertPath = path.join(__dirname, 'clientStore' ,'connectionStore','peer');
var connectionUrl='grpc://localhost:7051';
let data = fs.readFileSync(peerCertPath+'/peer0.org1.example.com.ca.crt');
var connectionOpts={
    'name': 'peername',
    'request-timeout':45000,
    'pem': Buffer.from(data).toString(),//tls_cacerts
    'ssl-target-name-override': 'peer0.org1.example.com'//server_hostname
};

//const peer1 = client.newPeer(connectionUrl,connectionOpts);//[optional]connectionOpts
const peer1 = client.newPeer(connectionUrl);
console.log(peer1);
