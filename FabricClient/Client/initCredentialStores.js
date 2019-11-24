//https://www.notion.so/wjwu/async-initCredentialStores-d2214efb276743338d7d7d46e487d58e

var Client = require('fabric-client');
const client = Client.loadFromConfig('../network.json');

client. initCredentialStores().then((rs)=>{
    console.log(rs);
    //console.log(client);
}