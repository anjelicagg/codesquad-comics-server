//ROUTES
const express = require("express")
const router =express.router()

app.get("/api/books",(request,response)=>{
    // response.send("This route points to the Home page")
    response.status().json({success:{message:"This will send all of the book data"}})
});



app.post("/create/new",(request,response)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});
app.put("/update/:id",(request,response)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});
app.delete("/delete/:id",(request,response)=>{
    // response.send("This will delete a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
});



