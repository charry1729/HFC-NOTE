//https://www.notion.so/wjwu/static-newDefaultKeyValueStore-options-704ec6a641a74419a42fe56dbc061198
var path = require('path');
var Client = require('fabric-client');
var storePath = path.join(__dirname, 'hfc-key-store');

// create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
Client.newDefaultKeyValueStore({ path: storePath}).then((stateStore)=>{//you can see the folder in the path that you have been assigned
    console.log(stateStore);
});