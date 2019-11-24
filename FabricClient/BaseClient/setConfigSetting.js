//https://www.notion.so/wjwu/static-setConfigSetting-name-value-c7744e232ab6422c96b3c9ccd7d68e3b

//var path = require('path');
var BaseClient = require('fabric-client/lib/BaseClient.js');
//var confPath = path.join(__dirname, '../config.json');

//BaseClient.addConfigFile(confPath);
//var ORGS = BaseClient.getConfigSetting('first-network');
//var ORGS2 = BaseClient.getConfigSetting('second-network', 'this is default value');

BaseClient.setConfigSetting('second-network', 'this is override value');

var ORGS3 = BaseClient.getConfigSetting('second-network');
console.log(ORGS3);