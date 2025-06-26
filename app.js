require("dotenv").config();
const connectDB=require("./config/connection")
const express = require("express")
const app= express()
const PORT=8080
const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes")
//MIDDLEWARE//

const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const path= require("node:path")
const { request } = require("node:http")

app.use(morgan("combined"))
app.use(helmet())
app.use(cors())


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname+"/public")));

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.SECRET_KEY,
    COOKIE:{
        httpOnly:true,
        secure:false,
        maxAge:1000*60*60*24,
    },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("api/book",bookRoutes);
app.use("/auth",authRoutes);

app.use((err,req,res,next)=>{
    if (err.code ===11000){
return res.status(err.status || 400).json({
    error:{message:"Already have an account? Try logging in."},
    statusCode: err.status || 400,
});
}
return res.status(err.status ||500).json({
    error: {message:err.message || "Internal server error."},
    statusCode: err.status || 500,
});
})
//ROUTES


//CP-SERVER-2 PT-1//
app.use("/route/bookRoutes", (req,res,)=>{
   res 
   .status(200)
   .json({success:{message:"This route points to the Home page"}});

});

app.get("/",(req,res,next)=>{
    res.status(200).json({
        success:{message:"Index page works after deployment"},
        statusCode:200,
    });
});
async function startServer() {
    try{
        await connectDB();

    

app.listen(PORT,()=>
    console.log("MongoDB database is connected")
);
}catch(error){
    console.error(`There was an error connecting to the database: ${error}`);
}
};


startServer()