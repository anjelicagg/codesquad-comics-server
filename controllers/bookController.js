
 const { privateDecrypt } = require("crypto");
const booksData =require("data/books.js")


const getAllbooks=async((req,res,next) => { 
    try {
        // const books=booksData
      
        return res.status(200).json({
        success:{message:""},
        data:books
        })
      }  catch (error){
        return res.response(400).json({
            error: {message:""}
        })
      }
    });

const getBook= async((req,res,next)=>{
    const {_id}= req.params;
    try{
        const book = bookInventory.find(bookInventory => bookInventory._id === _id);
        return res.status(200).json({
            success:{message:"Book found"},
            data:{book},
        });
    }catch (error){
        return res.status(400).json({
            error:{ message: "Error finding the book"}
        })
    }
});

const createBook=async ((req,res,next)=>{
const {title, author,publisher, genre,pages,rating,synopsis,imageURL}=request.body;

try{
    const newBook={
    title,
    author,
    publisher,
    genre,
    pages,
    rating,
    synopsis,
    imageURL,
};
return res.status(201).json({
    success:{message:"A new book was created"},
    data:{newBook}

});
}
catch (error){
}return res.status(400).json({
    error:{message:"There's an error when creating a new book"}
})
});

const updateBook = async((req,res,next)=>{
const {_id} =req.params;

try{
    const updateBook={
    title,
    author,
    publisher,
    genre,
    rating,
    synopsis,
    imageURL,
};
const foundBookIndex=books.find((book)=>book_id=== _id);
books[foundBookIndex]=newBook;
return res.status(201).json({
    success:{message:"The book is updated"},
    data:{updatebook},
});

} catch(error){
    return res.status(400).json({
        error:{message:"There was an error updating the book"}
    });
}
})
const deleteBook =async((req,res,next) =>{
    const {_id}=req.params;
    try{
        const books=booksData.filter((book)=book._id !==_id)
        return res.status(200).json({
            success:{message:"Book has been deleted"},
        })
    } catch (error){
        return res.status(400).json({
            error:{message:"There was an error deleting the book"}
        });
    }
})
module.exports={getAllbooks,getBook,createBook,updateBook,deleteBook};