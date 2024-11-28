const express = require("express");

const http = require("http");

const app = express(); // Basically app ek handler function hai aur kuch nhi hai bass .

// const port = 5000;

app.get("/",(req,res)=>{
  return res.send("<h1> aur yeh mera home page hai bass </h1>")
}); // handler aur bhi hote hai like , get,put,post,delete,patch etc.


app.get("/about",(req,res)=>{
  return res.send(`<h1> Hello My Self ${req.query.name}</h1>`); // hum yeha per query parameter send kaar rehe hai 
})

// ! Hum aise bhi kaar sekte aur isko st krne ka ek aur method hota hai 

// app.listen(port,()=>{
//   console.log(`app st ho gya iss port per : ${port}`)
// })


// * Aur ek aur method hai jisese hum apna server bana sekte hai yedi aur wo method yehi hai .

const myserver = http.createServer(app)

myserver.listen(4000,()=> console.log("let's go baby server st ho gya "))

