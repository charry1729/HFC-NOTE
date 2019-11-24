//https://www.notion.so/wjwu/create-req-registrar-f8501b0910474c128dce579ad746ff8d
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

let testIdentity = {
    enrollmentID: 'user_WJ_05',
    enrollmentSecret: 'userpw',
    affiliation: 'org1'
};

let hfcaIdentityService;

caService.enroll(bootstrapUser)
    .then((enrollment) => {
        admin = new User('admin');
        return admin.setEnrollment(enrollment.key, enrollment.certificate, 'Org1MSP');
    }).then(() => {
    hfcaIdentityService = caService.newIdentityService();

    // create a new Identity with admin
    return hfcaIdentityService.create(testIdentity, admin);
}).then((rs) => {
    console.log(rs);
})