const express  = require('express');

const app = express();

app.use(express.json());

const connectDB = require('./config/database');

const User = require('./models/user');

const {adminAuth} = require("./middlewares/auth");

connectDB().then(()=>{
    console.log('database connected successfully!');
    app.listen(7777,()=>{
        console.log("server started!");
    });
}).catch((err)=>{
    console.error("database not connected!");
});



app.post('/signup', async (req,res)=>{

    try{
    const user = new User({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        age: req.body.age,
        gender: req.body.gender
    });
    
    const data = await user.save();

    if(data){
        res.send('User Signed Up Successfully!');
    }else{
        res.status(401).send("User not signed up!");
    }
    }catch(err){
        res.status(500).send("something went wrong");
    }
})


