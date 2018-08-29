import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    firstname: {
        type: String ,
        required: true
    },
    fullname: {
        required: true,
        type: String
    },
    phonenumber: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        required: true,
        type: String
    },
    is_boss : {
        type : String,
        required: true
    }
});

AdminSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (hashErr, hash) => {
            if (hashErr) return next(hashErr);
            user.password = hash;
            next();
        });
    });
});

AdminSchema.methods.comparePassword = function (toCompare, done) {
    bcrypt.compare(toCompare, this.password, (err, isMatch) => {
        if (err) done(err);
        else done(err, isMatch);
    });
};

export default mongoose.model('Admin', AdminSchema);