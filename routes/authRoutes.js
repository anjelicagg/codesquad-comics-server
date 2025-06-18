const express = require("express")
const router =express.router()

const { register, login, logout, localLogin } = require("../controllers/authControllers");

//Replace all the routes with the proper functions AND corresponding CRUD operations (GET/PUT/POST/DELETE). There should be six routes in total.
//register - post
//login - get
//login/error, where we'll send a json message that says "Login error" -get
//login/local -get
//logout - get

router.post("/register",register);
router.get("/login",login);
router.get("/login/error",(req,res,next)=>{
    return res.json("Login error");
});
router.get("/login/local",localLogin);
router.get("/logout",logout)
router.get("unauthenticated", (req,res,next)=>{
console.log("Returning to the homepage...")
response.redirect("/")
});
// const register = async((req,res,next)=>{
//     const {firstName,lastName,username,password}=request.body;
//     console.log(register)
//     try{

//     };
// })
module.exports=router