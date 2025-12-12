const UserModel = require('../model/UserModel');
const bcrypt = require('bcrypt');


exports.signup = async (req,res)=>{
    try{
        const {fullname, email, password} = req.body;
        const user = await UserModel.findOne({ email: email });

        if(user){
            return  res.status(400).json({ message: "User already exists" ,user:{
                id: user._id,
                fullname: user.fullname,
                email: user.email
            }});
        }else{
            
            const hashedPasssword = await bcrypt.hash(password,10)
            const createUser = new UserModel({
                fullname,
                email,
                password: hashedPasssword
            });
            await createUser.save();
            return res.status(201).json({ message: "User created successfully" , user:createUser });
        }
    }catch(err){
        return res.status(500).json({ message: "Error in signup", error: err.message });
    }
}


exports.login = async (req,res)=>{
    try{
        const {email, password} = req.body;

        const loginuser = await UserModel.findOne({email});
        if(!loginuser){
            return res.status(500).json({ message: "No Email found" });
        }

        const isMatched = await bcrypt.compare(password, loginuser.password);
        if(!isMatched){
            return res.status(500).json({ message: "Invalid Password" });
        }
         return res.status(200).json({
            message: "Login successful",
            user: {
                id: loginuser._id,
                username: loginuser.username,
                email: loginuser.email 
            }
        });

    }catch(err){
        console.log("Error in login:", err);
        return res.status(500).json({ message: "Error in login", error: err.message });
    }
};