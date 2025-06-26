const mongoose=require("mongoose") 
const userSchema=new mongoose.userSchema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String, 
        required:true,
        minLength:8,
    },
    googleId:{
        type:String,
    },
    githubId:{
        type:String, 
    }
})
const User=new mongoose.model('User',userSchema)
module.exports(mongoose.model
    ("User",userSchema))