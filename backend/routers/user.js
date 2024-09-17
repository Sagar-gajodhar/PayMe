const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");

const { User , account} = require("../db");
const {JWT_P} = require("../config");
const authmiddleware = require("../Middlewares/autherization");
const router = express.Router();

const signup_schema = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string(),
    Mpin : zod.string().min(4)
})
router.post("/signup",async function(req,res){

    const body = req.body
    const {success} = signup_schema.safeParse(req.body);
    if(!success)
    {
        res.status(411).json({message:"Please Provide Valid Input"})
    }

    const existing = await User.findOne({
        username : req.body.username
    })

    if(existing)
    {
       return res.status(411).json({ message : "username already taken"});
    }

    try
    {
        const user = await User.create({
            username : body.username,
            password : body.password,
            firstName : body.firstName,
            lastName : body.lastName
        });

        await account.create({
            UserId : user._id,
            balance : 10000,
            Mpin : body.Mpin
        })
    
        const token = jwt.sign({
            userId : user._id
        }, JWT_P);
        return res.status(200).json({ message : "User Created Successfully" , token : token});
    }
    catch(error)
    {
        console.log(error);
    }

})

const signin_schema = zod.object({
    username : zod.string(),
    password : zod.string()
})

router.post("/signin",async function(req,res){
    const {success} = signin_schema.safeParse(req.body);
    if(!success)
    {
       return  res.status(411).json({message : "Please Provide Valid Input"})
    }

    const existing = await User.findOne({ 
        username : req.body.username,
        password : req.body.password
     })

    if(existing)
    {
        const token = jwt.sign({ userId : existing._id},JWT_P);
       return res.status(200).json({ token : token })
    }

    res.status(411).json({message : "NO User Found"})
})

router.get("/info",authmiddleware,async function(req,res)
{
    try{
        const user =await User.findOne({_id : req.userId})
        if(!user)
        {
            return res.status(403).json({message:"no user found"})
        }
        res.status(200).json(user);
    }catch(err){
        console.error("error is ", err);
        res.status(500).json({message:"Internal Error"})
    }
})

router.get("/bulk",async function(req,res){
    const filter = req.query.filter || ""
    const users = await User.find({
        $or:[{ firstName : {"$regex":filter}},{ lastName : {"$regex":filter}}]
    })

    res.json({
        user: users.map(user => ({
            username : user.username,
            password : user.password,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    })
    // res.send(users);
})
module.exports = router;