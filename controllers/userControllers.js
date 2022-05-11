const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req,res) => {
    const {
        email, 
        password,
        firstName,
        lastName, 
        contact,
        address,
        gender,
        status,
        dateOfBirth,
        pic,
        role
    } = req.body;

    // if(!name || !email || !password){
    //     res.status(400).json({err:"User already exists"})
    // }

   
    try {
        const userExists = await User.findOne({ email });

        if(userExists) {
            return res.status(400).json({err:"Email already exist!"})
        }

        const user = await User.create({
            email, 
            password,
            firstName,
            lastName, 
            contact,
            address,
            gender,
            status,
            dateOfBirth,
            pic,
            role
        });

        if(user){
            res.status(201).json({
                _id: user._id,
                firstName: user.firstName,
                email: user.email,
                pic: user.pic,
                role: user.role,
                token: generateToken(user._id),
            })
        }else {
            res.status(400).json({err:"Failed to create User"})
        }
        
    } catch (error) {
        res.status(400).json({err: error?.message})
    }
    
});


// const authUser = asyncHandler(async (req,res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if(!user){
//            return res.status(400).json({err:"Email doesn't exist!"});
//         }
    
//         const auth = await bcrypt.compare(password, user.password);
    
//         //fires when password is incorrect
//         if(!auth){
//             return res.status(400).json({err:"Password is incorrect!"});
//         }
        
//         // if all goods then authorize the user
//         res.status(200).json({
//             _id: user._id,
//             email: user.email,
//             name: user.name,
//             pic: user.pic,
//             token: generateToken(user._id)
//         });
//     } catch (error) {
//         res.status(400).json({err:"Failed to log in"})
//     }
// });


module.exports = {registerUser}