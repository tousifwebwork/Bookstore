const Book = require('../model/bookModel');

exports.getBook= async (req,res)=>{
    try{
        const book = await Book.find();
        res.status(200).json(book);
    }
    catch(err){
        console.log("Error in fetching book data",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}