const {Router} = require("express");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const {check,validationResult} = require("express-validator");
const User = require("../models/User");
const router = Router();

// /api/auth/register
router.post(
    '/register',
    [
      check("email","Incorrect email").isEmail(),
        check("password","Password must have at least 6 symbols")
            .isLength({min:6})
    ],
    async (req,res)=>{
    try{
        console.log("Body",req.body);
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:"incorrect information"
            })
        }
        const {email, password,name,surname} = req.body;
        const candidate = await User.findOne({email});

        if(candidate){
            res.status(400).json({message:"This user has already been signed in "})
        }
        const hashedPassword = await bcrypt.hash(password,12);
        const user = new User({email,password:hashedPassword,name:name,surname:surname});
        await user.save();
        res.status(201).json({message: "User is created"});
    }
    catch (e){
        res.status(500).json({message:'something went wrong'})
    }
})

// /api/auth/login

router.post(
    '/login',
    [
        check("email","Enter valid email").normalizeEmail().isEmail(),
        check("password","Enter password").exists(),
    ],
    async (req,res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:"incorrect information while log in"
            })
        }
        const {email, password} = req.body;

        const user = await  User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User is not found"})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password,try another one"})
        }
        const token = jwt.sign(
            {userId: user.id},
            config.get("jwtSecret"),
            {expiresIn: "1h"},
            )
        res.json({user});
    }
    catch (e){
        res.status(500).json({message:'something went wrong'})
    }
})

// router.post(
//     '/users',
//     async (req,res)=>{
//         try {
//           const id = req.params.id;
//           console.log(id)
//         }
//         catch (e){
//
//         }
//     }
// )
//

module.exports = router;