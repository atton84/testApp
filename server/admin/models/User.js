const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = {
    _id: Schema.Types.ObjectId ,
    username: String,
    password: String
};

module.exports = {model:mongoose.model('User', new Schema(UserSchema)),schema:UserSchema};
