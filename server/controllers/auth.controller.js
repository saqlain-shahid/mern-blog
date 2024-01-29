import User from "../models/user.model.js";
import bycryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
    try {
        const {username, email, password } = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required'))
    }
    const hashedPassword = bycryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })
    await newUser.save();
    res.json({
        message: 'SignUp successful'
    })
        
    } catch (error) {
       next(error);
    }
}
