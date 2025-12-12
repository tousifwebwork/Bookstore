const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
require('dotenv').config();


const bookRoute = require('./Routes/bookRoute');
const userRoute = require('./Routes/userRouter');
const contactRoute = require('./Routes/contactRouter');


app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

try{
    mongoose.connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
}catch(err){
    console.log("Error in connecting to MongoDB:", err);
}


app.use('/book', bookRoute);    
app.use('/user', userRoute);
app.use('/contact',contactRoute);


app.listen(PORT,() => {    
 console.log(`Server is running on http://localhost:${PORT}`);   
});