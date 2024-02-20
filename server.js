const express = require('express');
const authRouter  = require("./router/auth-router");
const postRouter = require("./router/post-router")
const connection = require("./connect/connectDb");

const cors = require("cors")
const app = express()
app.use(express.json()) //json handleing middleware
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api", postRouter);

app.get("/api", (req, res)=>{
    
    res.send("OK");
})

connection()
.then(()=>{
    const PORT = process.PORT || 5002;
    app.listen(PORT, ()=>console.log(`servers hosted at ${PORT}`));
})

