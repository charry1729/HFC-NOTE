//https://www.notion.so/wjwu/getAll-registrar-8e8b59ee124a4e3a8cd76ab9ee166e1a
var FabricCAServices = require('fabric-ca-client');
var User = require('fabric-client/lib/User.js');

let fabricCAEndpoint = 'https://localhost:7054';
let tlsOptions = {
    trustedRoots: [],
    verify: false
};
let caName ='ca-org1';
let caService = new FabricCAServices(fabricCAEndpoint, tlsOptions, caName);
let admin;
let bootstrapUser = {
    enrollmentID: 'admin',
    enrollmentSecret: 'adminpw'
};

let hfcaIdentityService;
caService.enroll(bootstrapUser)
    .then((enrollment) => {
        admin = new User('admin');
        return admin.setEnrollment(enrollment.key, enrollment.certificate, 'Org1MSP');
    }).then(() => {
    hfcaIdentityService = caService.newIdentityService();
    return hfcaIdentityService.getAll(admin);//Get all identities that the registrar is entitled to see.
}).then((resp) => {
    //console.log(resp);
    console.log(Object.values((resp.result.identities)));
});