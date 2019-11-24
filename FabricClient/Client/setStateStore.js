//https://www.notion.so/wjwu/setStateStore-keyValueStore-5075172467c84a78aeb60c8ce7baff4c

var path = require('path');
var Client = require('fabric-client');
var userStorePath = path.join(__dirname, '../clientStore','userKey');

var client = new Client();

// create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
Client.newDefaultKeyValueStore({ path: userStorePath}).then((stateStore)=>{ //you can see the folder in the path that you have been assigned
    client.setStateStore(stateStore);
    console.log(client);
});