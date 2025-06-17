const express = require("express")
const app= express()
const PORT=8080

//MIDDLEWARE//

const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const path= require("node:path")

app.use(morgan("combined"))
app.use(helmet)
app.use(cors)


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname+"/public")))
//ROUTES
app.get("/",(request,response)=>{
    // response.send("This route points to the Home page")
    response.status().json({success:{message:"Success"},
      
    })
});

app.get("/api/books",(request,response)=>{
    // response.send("This will send all of the book data")
    response.status().json({
        success:{message:"Success"},
    })
});

app.get("/api/books/:id",(request,response)=>{
    // response.send("This will update a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});
app.get("/api/books/delete/:id",(request,response)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});

app.listen(PORT,()=>{
    console.log(`The server is listening on http://localhost:3000/ ${PORT}`)
})

//CP-SERVER-2 PT-1//
app.use()
const bookRoutes= req("/api/books",(req,res,next)=>{
   res 
   .status(200)
   .json({success:{message:"This route points to the Home page"}});
return
})

use()