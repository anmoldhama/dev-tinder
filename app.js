const express  = require('express');

const app = express();

const {adminAuth} = require("./middlewares/auth")

// app.use('/',(req,res)=>{
//     res.send("hello wor");
// });

// Apply adminAuth middleware for /admin routes
app.use('/admin', adminAuth);

// Define the /admin/getAllData route
app.get('/admin/getAllData', (req, res) => {
    res.send("all admin data");
});



app.listen(7777,()=>{
    console.log("server started!");
});
