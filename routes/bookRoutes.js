const express = require("express")
const router =express.Router()
const { getAllbooks,getBook,createBook,updateBook,deleteBook }  = require ("../controllers/bookController");

//ROUTES

app.get("/",(request,response,next)=>{
    // response.send("This route points to the Home page")
    response.status().json({success:{message:"This route points to the Home page"}})
});

app.get("/.",(getAllbooks)=>{
    // response.send("This will send all of the book data")
    response.status().json({
        success:{message:"Success"},
    })
});

app.get("/:id",(updateBook)=>{
    // response.send("This will update a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});

app.post("/create/new",(createBook)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});

app.delete("/delete/:id",(deleteBook)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});

app.listen(PORT,()=>{
    console.log(`The server is listening on http://localhost:3000/ ${PORT}`)
})

module.exports(router)