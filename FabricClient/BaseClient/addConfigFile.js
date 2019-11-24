//https://www.notion.so/wjwu/static-addConfigFile-path-09bb565e7cde4b06b5fbdb3f0a634840
var path = require('path');
var BaseClient = require('fabric-client/lib/BaseClient.js');
var confPath = path.join(__dirname, '../config.json');

BaseClient.addConfigFile(confPath);
//no result