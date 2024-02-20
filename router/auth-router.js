const express = require('express');
const bcrypt = require("bcrypt");

const User = require("../model/User")

const router = express.Router();

router.post("/reg", async(req, res)=>{
    const { username, password } = req.body;
    console.log(`hello ${username} with password ${password}`);
    const isExist = await User.findOne({username});
    if(isExist){
        res.json({status: false, reason: "User already exits"});
    }else{
        User.create({username: username, password: await bcrypt.hash(password, 10)});
        res.json({status: 200, reason: "User Created"});
    }
})
router.post("/login", async(req, res)=>{
    console.log(req.body);
    const { username, password } = req.body;
    console.log("In login");
    console.log(username);
    const isExist = await User.findOne({username});
    if(isExist){
        const ExistPass = isExist?.password;
        console.log(ExistPass);
        const isPass = await bcrypt.compare(password, ExistPass, (err, found)=>{
            if(err){
                res.json({status: false, reason: "wrong password"})
            }else{
                if(found){
                    res.json({status: true, reason: "logged in"})
                }else{
                    res.json({status: false, reason: "password is wrong"})
                }
            }
        } );
        
    }else{
        res.json({status: false, reason: "username is wrong"})
    }
})

module.exports = router