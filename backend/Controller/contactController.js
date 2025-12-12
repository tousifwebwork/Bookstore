const Contact = require('../model/contactmodel');

exports.postContact= async (req,res)=>{
    const {email, message} = req.body;
    try{
        const newContact = new Contact({
            email,message
        });
        await newContact.save();
        res.status(201).json({ message: "Contact message saved successfully", contact: newContact });
    }catch(err){
         res.status(500).json({ message: "Error in saving contact message", error: err.message });
    }
}