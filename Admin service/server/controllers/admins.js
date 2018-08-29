const Admin = require('../models/admin');


function grpcMaker(obj){
    return {
        username: obj.username ,
        firstname: obj.firstname ,
        fullname: obj.fullname ,
        password: obj.password ,
        email: obj.email ,
        phonenumber: obj.phonenumber,
        position: obj.position
    }
}

class AdminAppHandler {
    
    listAdmins(_, callback) {
        Admin.find()
            .exec()
            .then((admins) => {
                for (let i = 0; i < admins.length; i++) {
                    console.log(admins)
                    admins[i] = grpcMaker(admins[i]);
                }
                console.log(admins)
                callback(null , {admins});
            }
        ) ;
    }

    createAdmin(call ,callback) {
        Admin.create({
            username: call.request.username,
            firstname: call.request.firstname ,
            fullname: call.request.fullname ,
            password: call.request.password ,
            email: call.request.email ,
            phonenumber: call.request.phonenumber,
            position: call.request.position
        })
            .then((savedUser) => {
                console.log(savedUser)
                console.log(grpcMaker(savedUser))
                callback(null, grpcMaker(savedUser));
            });
        
    }

    getAllFromStream(call) {
        todos.forEach((todo) => call.write(todo));
        call.end();
    }
}

export default AdminAppHandler;


