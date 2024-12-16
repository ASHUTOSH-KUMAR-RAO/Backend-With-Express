import express from "express"; // isko hum bolte hai module js

//  ! js mein two types hote hai file ko import karwane ke liye hai ek hota hai "module js" aur ek hota hai "common js"

// todo => const express = require("express"); isko bolte hai hum common js

const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1> kaise ho baby aap </h2>");
// });

// ? Creating a self routing :-

app.get("/api/friends", (req, res) => {
  const aboutFrineds = [
    {
      id: 1,
      Name: "Abhishk Kumar Singh",
      Home: "Krishna Nagar in Lucknow",
    },
    {
      id: 2,
      Name: "Awash Kumar",
      Home: "From SafdarGanj ",
    },
    {
      id: 3,
      Name: "Battery Pandey",
      Home: "From Itawa",
    },
    {
      id: 4,
      Name: "Jyoti Gupta",
      Home: "From Gorakhpur",
    },
  ];
  res.send(aboutFrineds);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
