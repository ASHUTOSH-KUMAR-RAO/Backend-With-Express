# All About Backend (MongoDb and Express+Node)

**Node-js:-** yedi dekha jaye to node js ka kaam shirf itna hi hai ek runtime Enviornment provide krw dena jaha per hum apni js ko run karwa sekte hai bass.

**Express-js :-** Express.js ek lightweight aur flexible web framework hai jo Node.js ke upar banaya gaya hai. Ye developers ko simple tarike se web applications aur APIs banane ka moka deta hai.(Basically iska main purpose hi wahi hota hai ki kisi api ko manage krna aur control krna hota hai aur hum isme efficient backend likh sekte hai )

  - [Express Is Here](https://expressjs.com/)

## How To Write a Code in Backend

```js

const express = require("express"); // *=> basically "require function" ka use hum isiliye jaab kisi chij ko chaiye hota hai hamin means use krna hota hai taab (include kr rehe hai hum express kyuki hame express ke features ko access krna hai isiliye ).

const app = express(); // ? => aur yeha per hum ek aap ko initalise kr rehe hai aur kuch nhi kaar rehe hai 

const port = 3000; //!  =>> isko hum as a variable bol sekte hai jo ki mera port number conatin krta hai aur ye btata hai ki hamara code kiss port per run karega 

app.get("/",(req,res)=>{
  res.send("hi baby kaise ho ye mera pehla backend ka code hai 🩵")
 // Request => get/put/post/delete
 // path => /,/about,/baby./article 
})


// todo=> How to start your app or server 

app.listen(port,()=>{ // * => aur hum yeha per ye kaar rehe hai jaab bhi mera application start hoga to hmko ek callBack function ko heat lr dena aur ye isiliye krna hai taaki hum kuch bhi clg karwa sekenge
  console.log("application run ho gya hai mera");
}); 

```


## MiddleWare's :-

 - [Here middleWare](https://expressjs.com/en/guide/using-middleware.html)

- Basically yedi dekha jaye to middleWare's bhi ek function hi hai but isme hota kya hai ,maan lijiye hamne ek request recive kiya aur recive krne ke just baad aur processing hone se pehle jo area hota hai usko hum request se middleWare ko de diya jata hai ki isese aage ka kaam aab tum karoge .(jaise ki error handling,validation ,authtentecation ,logging, aise kaam ko middleWare kaar sakta hai )

- Middleware functions can perform the following tasks:

   - Execute any code.
   - Make changes to the request and the response objects.
   - End the request-response cycle.
   - Call the next middleware function in the stack.

**Note:-** jaise ki hmko pta hota hai by default ek middleWare bana hota hai hamare index.js mein 


### How to load e MiddleWare :- 

```js
const express = require("express");

const ashu = express();
const port = 3000;

// todo => How to load a middleWare  into the app :-

ashu.use(express.json()); // * => isko hi hum ibuilt middleWare bolte hai

ashu.get("/", (req, res) => {
  console.log(req.body); //! => isko hi hum sahi tarike se parse karne ke liye hum ek inbuilt middleWare use krte hai (aur parse isiliye krte hai ki jisse hum apne code mein isko use kr sake)
  res.send("hi love you baby 😀😀");
});

ashu.listen(port, () => {
  console.log(`ho gya run mera bhaiya ${port}`);
});

```

## How to create a middleWare itself :-

_how to create_ :- request->logging->authtentication->validation->response

**note :-** aab hamne yeha p er request send kiya hai aur response dega ,lekin hamne iske bich mein three middleWare create kiya hai (jaise ki logginig , authtetication,validation) then iske baad request ko response dega .


```jsx
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// todo=> Hum yeha per=> Logging,authtentication,validation. ke liye middleWare create kaar rehe hai  {Aur ye saab Custom MiddleWare hai , iska mtlb hota hai jo hum khd se create kaar rehe hai }

//!=> For Logging Purpose ke liye:-

const loggingMe = function (req, res, next) {
  console.log("LOGGED HO RAHA HAI");
  next(); // *=> maine yeha per next isiliye likha kyuki jaab logging wala middleware end ho jayega to next per move kr jana mtlb jo mera next wala middleware hoga use per
};

app.use(loggingMe); //! hamne yeha per isiliye likha hai kyuki humko iss middleWare ko app ke andar  load bhi karwana hota hai .

// *=> For Authtentication Purpose ke liye :-

const authtentication = function (req, res, next) {
  console.log("AUTHTENTICATION HO RAHA HAI");
  next(); // todo => Similarly yeha per bhi maine auth khtm hone ke baad validation per jaunga isilye maine yeha per next likha hai
};

aap.use(authtentication); // ? => similarly yeha per bhi isiliye likha hai kyuki humko iss middleWare ko application ke andar ke load bhi karwana hota hai .


//?=> For Validation Purpose ke liye:-

const validation = function (req, res, next) {
  console.log("VALIDATION HO RAHA HAI");
  next(); //* => aab jaise ye mera last middleWare tha aab humne isko yeha per isiliye likha hai kyuki yedi aage hoga to chale jana nhi to request se response send kr dena and all set.
};

app.use(validation); // todo=> aur same yeha per isiliye likha hai kyuki humko iss middleWare ko app ke andar ke load bhi karwana hota hai .



// **Very Important  Note :- ** hum hamesa route handler ke just uper hi middleWare Create krte hai  kyuki yedi hum isese niche likhenge to wo lega hi nhi mtlb request response taak pahuch nhi payega mera.



ashu.get("/", (req, res) => {
  console.log("Mai Route Handler hu ")// !=> Basically hum isko routeHandler Bolte hai
  console.log(req.body);
  res.send("hi baby");
});

ashu.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## Route Specific MiddleWare :- 

 - Important for the industries purpose.

 **Note:-** Basically isme kya hota hai ki jaise humne Student name ka ek id bnaya to wo shirf student hi access kr payega iske alwa koi aur nhi kaar payega kisi bhi condition mein.iss process ko hum bolte hai Route Specific MiddleWare.

 **Overview :-** mtlb isme ye hota hai ki yedi hum jiske liye kaar rehe hai shirf wahi speciq route usko access kr sakta hai .isko hi hum bolte hai ki Route Specific MiddleWare.

 **Note:-** In general hum dummy data isiliye bnate hai ki chekc kr sekte hai request sahi tarike se response kaar raha hai aue yedi nhi kaar raha hai to json ke andar ke store ho jata hai data hai .


**CORS Policy :-** 