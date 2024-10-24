const express  = require('express');

const app = express();

app.use('/',(req,res)=>{
    res.send("hello wor");
});


app.listen(7777,()=>{
    console.log("server started!");
});
