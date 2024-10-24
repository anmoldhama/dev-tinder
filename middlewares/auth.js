
const adminAuth = async(req,res,next)=>{
    const token = "xyze";
    const isAuthenticated = token === "xyz";
    if(!isAuthenticated){
       res.send("user not authenticated");
    }else{
        console.log("kdmfkn")
        next();
    }
}

module.exports= {adminAuth};