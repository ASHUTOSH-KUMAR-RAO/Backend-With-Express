const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const loggingMe = function (req, res, next) {
  console.log("LOGGED HO RAHA HAI");

  res.send("ho gya aisa hai aab isko yehi end karo"); //! aab yeha kya ho raha hai maine isko yehi per response send kr diya hai jiske wajah se ye iske niche nhi jayega aur yehi se jump kaar jayega routing handler per aur yehi se request ko response send kr dega ye 🦭

  // next();
};

app.use(loggingMe);

const authtentication = function (req, res, next) {
  console.log("AUTHTENTICATION HO RAHA HAI");
  next();
};

app.use(authtentication);

const validation = function (req, res, next) {
  console.log("VALIDATION HO RAHA HAI");
  // next();
};

app.use(validation);

const route = require("./Routes-MiddleWare/Routes")

//  Mounting the soutes

app.use("/api",route)
// /api/student
//  /api/admin
  
app.get("/", (req, res) => {
  console.log("Mai Route Handler hu "); 
  console.log(req.body);
  res.send("hi baby");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
