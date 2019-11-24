//https://www.notion.so/wjwu/getClientCertHash-create-6930f98017d049209d7f32a1e836e150

var path = require('path');
var fs = require('fs');
var Client = require('fabric-client');
var tlsClientCertPath = path.join(__dirname, 'clientStore','tlsca');
let certData = fs.readFileSync(tlsClientCertPath+'/tlsca.org1.example.com-cert.pem');
let keyData = fs.readFileSync(tlsClientCertPath+'/7cbd123c3a4019b0a9ecfdbd177927a227c9dac0fc1b8ad88eece0eaca65a8da_sk');
let tlsClient ={
    cert: Buffer.from(certData).toString(),
    key: Buffer.from(keyData).toString()
}
const client = Client.loadFromConfig('../network.json');
client.setTlsClientCertAndKey(tlsClient.cert, tlsClient.key);

var rs = client.getClientCertHash();
console.log(rs);
