import admin from "../models/admin";

const Admin = require('../models/admin');


function grpcMaker(obj){
    return {
        username: obj.username ,
        firstname: obj.firstname ,
        fullname: obj.fullname ,
        password: obj.password ,
        email: obj.email ,
        phonenumber: obj.phonenumber,
        is_boss: obj.is_boss
    }
}

class AdminAppHandler {
    
    listAdmins(_, callback) {
        Admin.find()
            .exec()
            .then((admins) => {
                for (let i = 0; i < admins.length(); i++) {
                    admins[i] = grpcMaker(admins[i]);
                }
                console.log(admins)
                callback(null , admins);
            }
        ) ;
    }

    createAdmin(call ,callback) {
        Admin.create({
            username: call.username,
            firstname: call.firstname ,
            fullname: call.fullname ,
            password: call.password ,
            email: call.email ,
            phonenumber: call.phonenumber,
            is_boss: call.is_boss
        })
            .then((savedUser) => {
                callback(null, grpcMaker(savedUser));
            });
        
    }

    getAllFromStream(call) {
        todos.forEach((todo) => call.write(todo));
        call.end();
    }
}

export default AdminAppHandler;


