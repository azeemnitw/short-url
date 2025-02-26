const express = require("express")
const urlRoute = require("./routes/url")
const {connectToMongoDB} = require("./connect")
const URL = require("./models/url")

const app = express();
const PORT = 8002;
app.use(express.json());
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(()=>console.log("MongoDb Connected"))
app.use("/url",urlRoute);

app.get("/:shortID",async(req,res)=>{
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID},{
            $push:{
                visitHistory:{
                    timestamp: Date.now(),
                }

                }
            }
        );
        res.redirect(entry.redirectURL);    
        
    

});



app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`));