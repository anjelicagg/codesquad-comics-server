//ROUTES
const express = require("express")
const router =express.router()
app.get("/",(request,response)=>{
    // response.send("This route points to the Home page")
    response.status().json({success:{message:"Success"},
      
    })
});

app.get("/.",(request,response)=>{
    // response.send("This will send all of the book data")
    response.status().json({
        success:{message:"Success"},
    })
});

app.get("/:id",(request,response)=>{
    // response.send("This will update a book by its id")
    response.status().json({
        success:{message:"Success"},
    })
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

app.listen(PORT,()=>{
    console.log(`The server is listening on http://localhost:3000/ ${PORT}`)
})

