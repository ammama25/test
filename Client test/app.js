const grpc = require('grpc');
const loader = require('@grpc/proto-loader');

const bindPath = '127.0.0.1:8083';
loader.load('admin.proto')
    .then((packageDefinition) => {
        const Package = grpc.loadPackageDefinition(packageDefinition);
        const Client = Package.admin_app_package.AdminApp;
        const client = new Client(bindPath, grpc.credentials.createInsecure());

        // client.createAdmin({username: 'username',
        //     firstname: 'firstname' ,
        //     fullname: 'fullname' ,
        //     password: 'password' ,
        //     email: 'email' ,
        //     phonenumber: 'phonenumber' ,
        //     position: "boss"} , function (err , res) {
        //         if (err) {
        //             return console.log(err);
        //         }
        //         console.log('admins:  ');
        //         return console.log(res);
        //
        // })

        client.listAdmins({}, function (err, res) {
            if (err) {
                return console.log(err);
            }
            console.log('admins:');
            return console.log(res);
        });


    });
