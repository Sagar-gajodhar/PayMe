const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb+srv://sagarrathore52204:Sagar%402004@cluster0.dcvzzpc.mongodb.net/").then(()=>{
    console.log("Connected To dataBase");
})

const user_schema = new mongoose.Schema({
    username : String,
    password : String,
    firstName : String,
    lastName : String
})

const User = mongoose.model("users",user_schema);

const account_schema = new mongoose.Schema({
    UserId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    balance : {
        type : Number,
        required : true
    },
    Mpin : {
        type : String,
        require : true
    }
})

const account = mongoose.model("accounts",account_schema);

module.exports = {
    User,
    account
}