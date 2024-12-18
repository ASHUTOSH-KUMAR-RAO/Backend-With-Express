import dotenv from "dotenv";
import express from "express"; // Ensure express is imported
import { ConnectDataBase } from "./db/index";

dotenv.config({
  path: "./env"
});

const app = express(); // Initialize app

(async () => {
  try {
    await ConnectDataBase();
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.log("MongoDB connection failed:", error);
  }
})();


// ? Now 2nd Approach Is Here :-




// ! This Is Our 1st Approach aur ye bhi production based hi hai isme koi issues nhi hai.

// todo => Hum isko normal function ya arow function se bhi kr sekte hai but proble aa jayegi kyuki humko isko wrap bhi krna hota hai isiliye.,aur ye bhi bura hum isko aise bhi kr sekte hai

// * isiliye hum iska alternative use karenge jisko bolte hai IIFE aur ye turant call kr deta hai,aur ye ek better approach bhi hai error ko hanling krne ke liye
/* 
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DataBase_Name}`);
    app.on("error", (error) => {
      console.log("Error 404 is :", error);
      throw err;
    });

    app.listen(process.env.PORT,()=>{
      console.log(`app is running is on port is ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR ", error);
    throw error;
  }
})();

*/
