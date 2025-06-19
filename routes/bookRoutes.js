const express = require("express")
const router =express.router()
const { getAllbooks,getBook,createBook,updateBook,deleteBook }  = require ("../controllers/bookController");

//ROUTES

app.get("/api/books",(request,response,next)=>{
    // response.send("This route points to the Home page")
    response.status().json({success:{message:"Success"},
      
    })
});


app.post("/create/new",(createBook)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});

module.exports(createBook,)

