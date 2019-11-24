//https://www.notion.so/wjwu/static-getConfigSetting-name-default_value-457a3058237c4b48b4741f7d58dc32c9
var path = require('path');
var BaseClient = require('fabric-client/lib/BaseClient.js');
var confPath = path.join(__dirname, '../config.json');

BaseClient.addConfigFile(confPath);
var ORGS = BaseClient.getConfigSetting('first-network');
//var ORGS2 = BaseClient.getConfigSetting('second-network', 'this is default value');
console.log(ORGS);