//https://www.notion.so/wjwu/Class-Channel-0d22df86e3eb47aebed3a48731ec221e

var Client = require('fabric-client');
var Channel = require('fabric-client/lib/Channel.js');
const client = new Client();
const channel = new Channel('channelname', client);// name should match Regex /^[a-z][a-z0-9.-]*$/
console.log(channel);
