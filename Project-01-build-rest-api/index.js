const express = require("express");

const users = require("./MOCK_DATA.json"); // ! yeha per kuch new nhi kaar bass maine jo fake data generate kiya tha usko hi require kr raha hu
const { use } = require("framer-motion/client");

const app = express();
const port = 4000;

// * Routes :-

app.get("/users", (req, res) => {
  // ! aise hi hum backend ke andar kuch bhi write kaar sekte hai ek variable ke andar.
  // * aur isko hi hum bolte hai server side randering

  const html = ` 
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}  
  </ul>
  `;
  return res.send(html); // * hamne yeha per send isiliye use kiya kyuki hum yeha per html ke through file ko access kr rehe hai
});

// Rest Api :-

// GET Routing For the get purpose :-

app.get("/api/users", (req, res) => {
  // todo=> aur isko hybrid model bhi bol sekte hai
  return res.json(users); // ? hamne yeha per json isiliye send kiya kyuki json ke sath hum isme kaam kaar rehe hai
});

// todo=> aab humko kisi bhi particular ID ke data nikalna hai to kaise krte hai let see.

// !  Very - Very Important point hum isko yeha per alag karke like hai to hum isko ek hi merge karke likh sekte hai aur ye production based per best example hota hai aur indusrties bhi badi badi project mein multiple route ko ek hi me merge kr deti hai

app
  .route("/api/users/:id")
  .get((req, res) => {
    // ! yedi kahi per kisi route mein colon(:) ata hai iska mtlb hota hai waha per dynamic routing kiya gya hai uar jo uske aage hota hai usko hum ek variable bolte hai
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  // ! POST Routing: for the Creating Purpose
  .post((req, res) => {
    // todo=> Create a New User
    return res.json({ status: "pending" });
  })
  // ! PATCH Routing: For the Updatation:-
  .patch((req, res) => {
    //* update krta hai users ko id ke according
    return res.json({ status: "pending" });
  })

  // *  DELETE Routing :- For the Deletion Purpose :-
  .delete((req, res) => {
    // ? data ko delete kr deta hai  users ko id ke sath
    return res.json({ status: "deleting the data" });
  });

app.listen(port, () => {
  console.log(`iss port per run hoga mera code ${port}`);
});


// ! Basically Postman is nothing but it is a tool jaha per hamare api testing aur backend meiin kuch test krna ho to krte hai 