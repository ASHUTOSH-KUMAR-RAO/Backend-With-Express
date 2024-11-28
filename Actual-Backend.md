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