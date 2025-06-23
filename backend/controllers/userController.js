import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//route for user register

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking the user is already
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exist" });
    }
    // validating email for srtong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please eneter  a valid email",
      });
    }
    if (password.lenght < 8) {
      return res.json({
        success: false,
        message: "Please enter the strong password",
      });
    }
    // passing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// route for admin login
const adminLogin = async (req, res) => {  
  try{  
   const {email,password} =req.body
   if(email ===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
          const token =jwt.sign(email+password,process.env.JWT_SECRET);     
          res.json({ success: true, token });
   }else{
    res.json({success:false,message:"Invalid credentials"})
   }   
  }
 catch (error) {           
          
    res.json({ success: false, message: error.message });
  }
};
export { loginUser, registerUser, adminLogin };  
