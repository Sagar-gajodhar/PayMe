const express = require("express");
const mongoose = require("mongoose")
const authmiddleware = require("../Middlewares/autherization")
const {account} = require("../db")
const router = express.Router();

router.get("/balance",authmiddleware,async function(req,res){
    try{
        const acc = await account.findOne({UserId : req.userId})
        if(!acc){
            return res.status(404).json({message:"No accound Found", id:req.userId})
        }
        return res.status(200).json({balance : acc.balance})
    }
    catch(error)
    {
        console.error("Error fetching balance:", error);
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

router.post("/transfer", authmiddleware ,async function(req,res){
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const{to,amount} = req.body;

        const receiver = await account.findOne({ UserId : to}).session(session)
    
        if(!receiver)
        {
            session.abortTransaction();
           return res.status(403).json({message:"NO user Found"})
        }
    
        const sender = await account.findOne({UserId : req.userId}).session(session)
        
        if(sender.balance < amount)
        {
            session.abortTransaction();
           return res.status(403).json({message : "Insufficient Balance"})
        }
    
        // ---------------Crediting amount------------------
        await account.updateOne({UserId : to},{$inc : {balance : amount} }).session(session)
    
        //----------------Debiting amount-------------------
        await account.updateOne({UserId : req.userId} , {$inc : {balance : -amount}}).session(session)
    
        await session.commitTransaction();
        session.endSession();
        return res.status(200).json({message : "Transfer Successfull"})

    }catch(err)
    {
        await session.abortTransaction();
        session.endSession();
        console.log(err);
        return res.status(500).json({message:"Internal Error"});
    }
})

module.exports = router;