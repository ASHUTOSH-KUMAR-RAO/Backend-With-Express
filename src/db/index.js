import mongoose  from "mongoose";

import { DataBase_Name } from "../constants.js";

const ConnectDataBase = async ()=>{
    try {
    const connectionInstant =   await mongoose.connect(`${process.env.MONGODB_URL}/${DataBase_Name}`);
    console.log(`MongoDB Host !! MongoDB Connected : ${connectionInstant.connection.host}`); // hum yeha isiliye isko variable mein hold kara sekte hai kyuki jo mongoose hota hai wo ek return type ka object deta hai 
    } catch (error) {
      console.log("MongoDb Connection Error is ",error);
      process.exit(1); // ? aur hamne jaise yeha per 1 likha hai n aise hi aur bhi code hote hai jo alag alag type ke proces hote hai 

// ! Process ka mtlb ye hota hai jaise ki maan lijiye hunko pta hai baxckend mein hamesa continuously data chalta hi rehta hai ,isi chiz ko to hum process bolte hai 😀😀😀
      
    }
}

export default ConnectDataBase;