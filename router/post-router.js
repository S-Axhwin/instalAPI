const express = require('express');
const Post = require("../model/Post");
const User = require("../model/User");


const router = express.Router();

router.post('/newpost', async(req, res)=>{
    console.log('enter newpost');
    
    const { username, blog } = req.body;
    const isExist = await User.findOne({username});
    if (isExist){
        const curDate = new Date()
        const newPost = await Post.create({post: blog, username, date: curDate.getDate()});
        console.log(newPost);
        res.send({status: true, reason: "posted new post"})
    }else{
        res.send({status:false, reason: "user not found"})
    }
})

router.get("/post", async(req, res)=>{
    const datas = await Post.find()
    res.json(datas.reverse());
})

module.exports = router