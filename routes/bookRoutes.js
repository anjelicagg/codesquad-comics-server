//ROUTES
const express = require("express")
const router =express.Router()

app.get("/api/books",(request,response,next)=>{
    // response.send("This route points to the Home page")
    response.status().json({success:{message:"This will send all of the book data"}})
});



app.post("/create/new",(request,response,next)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});
app.put("/update/:id",(request,response,next)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"This will delete a book by its id"},
    })
});
app.delete("/delete/:id",(request,response)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"This will delete a book by its id"},
    })
});

module.exports(Router)
