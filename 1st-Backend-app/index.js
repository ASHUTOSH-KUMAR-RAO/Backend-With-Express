const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hi baby kaise ho ye mera pehla backend ka code hai 🩵");
  // Request => get/put/post/delete
  // path => /,/about,/baby./article
});


// todo=> How to start your app or server.


app.listen(port, () => {
  console.log(`application run ho gya hai mera${port}`);
});

