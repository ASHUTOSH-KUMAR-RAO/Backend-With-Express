// console.log("hi baby kaise ho aap")

require('dotenv').config()

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram",(req,res)=>{ // Basically yeha per hum ek call back function ka hi use kr rehe hai 
  res.send("<h2> Hi baby kya aap insta krte ho </h2>")
});

app.get("/account",(req,res)=>{
  res.send(console.log("Apka Account bahut proffesional hai "))
})

app.get("/like",(req,res)=>{
  res.send("<h1>Hi baby apne like kr diya hai apne acoount se </h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});