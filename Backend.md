# Backend Development :- 

- Basically dekha jaye to server ek bahut hi famous word hai but server is nothing but it is a softwere jo serve krta hai bass.

- API it is a type of response jo ki max of the time JSON ke formate mein hi deta hai 

- Express Hamra Basically routing krne ke liye hi kaam ata hai jab hum kisi type ka server bante hai taab

- Mongoose basically ek type ka dataBase hai jo data ko store krne mein kaam ata hai 

- Mongodb ke sath hum ek library /database ka bhi use krte hai jaise ORM,ODM...etc

- C++ => Crow FrameWork, Java => SpringBoot, js=>NodeJs,Php => LaraVell....etc

## Important Point :-

- In Generall dekha jaye to js ke sath mostly 3 hi case baan sekte hai DATA,FILE,3rd Party API....etc

**Folder Structure:-** DB=>Models=>Controllers=>Routes=>MiddleWare=>utils..ects

- Basically hamara jo .env hota hai ye ek tarah ka file hota hai jsike andar sensitive data ko hum rakhte hai jisse wo publically access nhi ho paye aur hamara PORT ya kuch bhi safe rehe hai .

**CORS Error:-** Basically iska mtlb hota hai ki Cross Origin (iska mtlb hota hai ki iska origin alaga - alag hona)

**Proxy:-** Basically proxy ek object hai.

## Data Modelng With Mongoose :-

[Mongoose Is Here](https://mongoosejs.com/)

- Basically dekha jaye to data modeling word hi saab kuch define kaar deta hai ki actually mein hota kya hai iska simple sa mtlb hota hai ki "data ka structure define krna" bass aur kuch nhi hota hai .

- aur hum isko as ek helper bhi bol sekte hai kyuki ye help krta hai data base ko modeling karne mein 

- [Prisma](https://www.prisma.io/)

- Basically ye bhi ek tarah ka helper hi hota just like a mongoose lekin aaj ke time per yehi jyada use hota hai ki kyuki ye abhi market mein new aya hai n isiliye

## How to create a mongoose for data model :-

- **Step.1:-** Phele hum import krte hai mongoose ko .

- **Step .2:-** Phir ek mongoose ka schema bnate hai jo ki (new) keyword ka use karke bnate hai .

- aur jo schema bnata hai ye banata hai mongoDb ke andar .

- **Step.3:-** Aur jo hum schema bnate hai ye taab taak kaam nhi karega jaab taak hum isko export nhi krte hai taab taak.

- [yehi maine ek model create online ](https://stackblitz.com/edit/stackblitz-starters-spa4ob?description=&file=models%2Ftodos%2Ftodo.model.js&title=Express%20Starter)

```jsx

// Aur Important point ki ye 3 point by default hi hota hai baas schema hum apne according change kr sekte hai.

// STEP 1.:-
import mongoose from 'mongoose';

// STEP 2.:-

let user_shcmea = new mongoose.Schema(
  
  {
  // hum isko aise bhi kaar sekte hai but ye bhi thik practise hi hoti hai , isko ek-ek ka object bana ker krna ek best practise hota hai 
  // username:String,
  // email:String,
  // isLoogedIn:Boolean

  username:{
    type:String,
    required:true,// aur iska mtlb hota hai ki username to hona hi chaiye 
    unique:true, // iska mtlb hota hai saab username unique hona chaiye.
    lowercase:true // aur iska mtlb hota hai saab username lowercase mein hi hona chaiye
  },

  email:{
    
  }
}
) // basicalyy schema ek method hota hai agar dekha jaye to.aur iska hi use krke hum ek Schema bnate hai

// STEP 3.:-

export let User = mongoose.model("User",user_shcmea); // aur basically model ke andar two parameter hote hai "1st:kya model bnau mai , 2nd: kiske based per model bnau mein" yehi two parameter hote hai jo hum pass krte hai.

// User jaab bhi mongoose ka name mongo Db ke andar Jata hai to User se users ho jata hai (jaab koi bhi model dete hai taab iss jagah per ye convert ho jata hai plural mein aur saab kuch lowerCase mein ho jata hai )

```

**Here Some Data Modeling Tool :-**

- [Moon Modler](https://www.datensen.com/data-modeling/moon-modeler-for-databases.html)

- [Eraser](https://www.eraser.io/)


## Blocking Operation (Syncronus Operation) :-
## Non-Blocking Operation (ASyncronus Operation) :-

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

## Versioning in Node js:-

**Note 1:-** Jaise ki pta hai ki hmko hum koi dependecis install krte hai usme version hoti hi hai like "^4.21.1" kuch iss type ka hi dikhta hoga.

**Note 2:-** Aur sayed apko ye baat pta nhi hoga ki version se bhi hamra server ya syste, hack ho sakta hai evene intrenational hacker mostly iska hi use krte aur isese live location track nhi ho pta hai isiliye.

**Parts of Version :-**

**Parts 1:-** 4 (major relase) isko bolte hai hum major update /breaking update

**Parts 2:-** 21 (aur isko hum bolte hai second part , aur iska kaam hota hai recomneded bug ko fix krta hai ya phir security purpose ke liye hota hai )

**Parts 3:-** 1 (isko hum last parts bhi bolte hai aur basically iska kaam hota hai minor fixes)(aur basically ye ek optional updates aur updates ya bugs isme hi aa ker store hota hai )

```jsx
npm i express@5.18.0 ==> hum aise bhi apne according change kr sekte hai 

```

# Rest Api :- (RestFull Api) 

- jaise ki hmko pta hai backend mein mostly api yehi krta hai ki **ek clint server ko request send krta hai aur badle mein server uko response send krta hai** 

- Aur ye basically ye kaam krne ke liye kuch rules hote hai aur ye rules hame RestFullApi hi deta hai aur dekha jaye to ye ek best practisese bhi hota hai 

**Rules For Rest Api :-**

- Basically Rest Api ye **ek server clint arcitecture per kaam krta hai.**

- aur hmko hamesa **http methods ko hi use krna chaiye** (GET => hum data ko get krte hai , POST => isme hum data ko create krte hai , PATCH => aur isme hum data ko update krte hai ) 

- JSON mein jo bhi data send krte hai wo hamesa **key aur value ke pair mein hi send hota hai.**

- yedi hmko pta hai ki **broweser ke according hi data send krna hai to hum hamesa data ko html ke form mein hi send kr dete hai nhi to json ke formate ke mein send kr dete hai.**

- lekin yedi mere pass koi bhi cross file hai means ki any type of device / data to hi like (iso,android,anytype) iss case mein hum to iss case mein hum hamesa data ko **json ke form mein hi send krte  hai.**

**Note 1:- Yedi hmko kuch bhi render krna hota hai to hum server mein yehi use krte hai.** 

```jsx

res.send() // ye bhi kr sekte hai 
res.render() // ye bhi kr sekte hai  , aur iske hum html ko hi render krna best samjhte hai kyuki ye fast hota hai .

```

**Note 2:- aur yedi hum apni json ke form mein api ko response krna hota hai to.**

```jsx

res.json(..... obj) // aise krte hai , isko hi hum csr bolte hai 

```

**Important point :-**

- **Always CSR slow hota hai as compare to SSR** ,kyuki CSR mein data ko fetch krna jisese fetching krne mein time leta hai jiske wajah se ye slow hota hai ,lein SSR mein data ko fetch nhi krna padta hai  aur rukta nhi hai isiliye ye fast hota hai always as compare to CSR<SSR

### htts Headers :-

1. Response Header

2. Request Header

- Let Suppose maan lijiye ek mera frnd hai aur usko ek mail send karna hai to real world mein to yehi hota hai ki post man aya aur usko post diya aur wo send kaar deta hai aur phir wo padh kr aise hi send kr deta hai , lekin yedi dekkha jaye to mail ko send karne ke liye kuch deta hota hai aur without data ka koi send hi nhi kaar sakta hai genrall aur real world mein yehi hota hai n 

### Ab hum isko kaise justify krte hai tecnical term wo btata hu :-

- jaise mera jo dost tha jiske ke pass send krna tha mail wo dost ho gya mera server aur mai ho gya clint thik hai ,aur aab jo actual data hai wo to mail ke andar hota hai aur jo uper rehta hai usko hi hum header bolte hai 

- aur jo http data hai wo ek meta-data hai,aur meta-data kya hota (data about data) ye to simple hi hota hai 

## Status Code OR (http response status code) :-

- Popular Status code hai 404-Not Found ye bhi ek tarah ka status code hi hai , aur aise hi bahut jyada status code hote hai .

- [Oficially Status code is Here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- **Kya hota hai:-** 

    - Basically ye yahi btata hai ki jaise kisi bhi server se response aa raha hai uska type kya hai means ki ye successFull , notSucessFull hai , ya phir,kya ye ek error response aise hi  any type kisi bhi type ka ho to yehi pta chalta hai hamein status code se.

    - aur hmko ye pta chalta hai ki successFull hai ya aur kisi bhi type ka hai to uske liye haar ek haar ek response ke ek special code asign hota hai , let explain it deeply, jaise ki maan lijiye 2 response aya hai server se thik ab hmko pta krna hai ki usme se successfull kaun sa hua hai aur error kaun sa hua hai to ye hamein pta chalta hai uska status code dekh kr aur ye wahi status code jo haar type ke response ke liye ek uniqe code asign hua rehta hai wahi code hota hai 

## Type Of Responses :-

  - Yedi dekha jaye to hamare pass shirf 5 types ke hi response hote hai 

  - Informational responses - (100-199) , iska mtlb hota hai yedi mera response 1 se start hota hai to usko hum **Informational responses** aise type ka response bolte hai .

  - Successfull responses - (200-299) ,  iska mtlb hota hai yedi mera response 2 se start hota hai to usko hum **Successfull responses** aise type ka response bolte hai.

  - Redirection messages - (300-399) ,  iska mtlb hota hai yedi mera response 3 se start hota hai to usko hum **Redirection messages** aise type ka response bolte hai.

  - Client error responses - (400-499) ,  iska mtlb hota hai yedi mera response 4 se start hota hai to usko hum **Client error responses** aise type ka response bolte hai.

  - Server error responses - (500-599) ,  iska mtlb hota hai yedi mera response 5 se start hota hai to usko hum **Server error responses** aise type ka response bolte hai.

## MONGO CHACHA :-

- Basically yedi dekha jaye to mongo chacha ek Database hai 

- aur ye No-Sql based Database hota hai.

- aur Basically NO-Sql Database Documetation ke uper kaam krta hai 

- Aur ye Bahut Strong Support hai for **Aggregation pipes**

- Aur ye Work krta hai **BSON Format** per ,aur apko bta de hum jaise json formate aise hi ek BSON fomrate bhi hota hai 

- mongo Chacha is best for Node JS application Based 


 ## SQL :- Structured Querry Language 

 - Iske andar My-Sql and Postgree jaise Database aate hai.

 - Aur Sql ka mtlb hota hai :-aur ye relations/Tables ke uper kaam krte hai aur 

 **Note:-** Mongo Chacha se Connect krne ke liye hame ek package chaiye hota hai jisko hum bolte hai **MOngoose** 

## How Mongoose it is work ...?

- Mongoose mein to sabse pehle ek **schema** hota hai ,jisme hum **define krte hai Structure**

- iske baad hum iss **schema** ka use krke ek **model** banate hai 

- Aur iss model ka use krke hum **CRUD** operation krte hai  CRUD = Create,Read,Update,Delete

**Note :-** Basically hum DataBase ko Majorly 2 hi tarike se kaar sekte hai 

  1. Jaab Bhi hum dataBase se Connect krte hai to problem ayegi hi ayegi ,***aur usi problem humko catch tryCatch ke andar ay promises ke andar wraap karna padta hai jisse wo problem ko solve kr sekte hai*** 

  2. DataBase Hamesa dusre contuinet mein rakha hota hai means ki , maan lijiye hamne apne DB ka location set kiya hai mumbai/hydrabad lekin ye bhi ho sakta hai jo mera code base hai wo out of country mein ya just iske oppsite bh to ho sakta hai n.****




