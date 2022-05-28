const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const app=express();
const pinRoute=require("./routes/pins")
dotenv.config();

app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
     console.log("Woah!MongoDB Connected");
     
})
.catch((err)=>console.log(err));


app.use("/api/pins",pinRoute);
app.listen(8800,()=>{
     console.log("Hey Labiba!Your backend server is running hehe :)!")
});