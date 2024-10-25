const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://anmoldham:YOudAaoDHDjkOk69@cluster0.eawxw0q.mongodb.net/devTinder');
}

module.exports= connectDB;