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
app.use(express.static(path.join(__dirname+"/public")))
//ROUTES
app.get("/",(request,response)=>{
    // response.send("This route points to the Home page")
    response.status().json({success:{message:"This route points to the Home page"},
      
    })
});

//CP-SERVER-2 PT-1//
app.use("/route/bookRoutes", (req,res,)=>{
   res 
   .status(200)
   .json({success:{message:"This route points to the Home page"}});

});

app.use("/api",authRoutes)
app.listen(PORT,()=>{
    console.log(`The server is listening on http://localhost: ${PORT}`)
});


module.exports()