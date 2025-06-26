const mongoose=require("mongoose") 
const bookSchema=new mongoose.bookSchema({
title:{
    type:String,
    required:true,
    trim:true,
},
author:{
    type:String,
    required:true,
    trim:true,
},
publisher:{
type:String,
},
genre:{
    type:String,
},
pages:{
    type:Number,
    required:true,
},
rating:{
   type:Number, 
},
synopsis:{
    type:String,
},
image:{
    type: String,
}
})
const Book = mongoose.model('Book',bookSchema)
module.exports = mongoose.model
("books",bookSchema)