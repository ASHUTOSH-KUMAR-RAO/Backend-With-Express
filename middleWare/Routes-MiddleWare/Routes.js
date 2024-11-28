const express = require("express");
const router = express.Router();

// ! Our Own MIddleWare :-

const auth = function (req, res, next) {
  console.log("kaise ho baby ");

  // Create a dummy data for the helping purpose :-

  req.user = { userId: 1, role: "Student" };

  if (req.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "Invalid",
    });
  }
};


const isStudent = function (req,res,next) {

  console.log("ye shirf student ke liye hai ")

  if (req.user.role === "student") {
    next()
    
  }

  else{
    res.json({
      success:false,
      message:"access denied this is access only student  "
    })
  }
}


// !  aur generally hamne yeha per isiliye alag bnaya hai sabka jisese ki overlap aur fluctuate nhi kare ek dusre ke uper aur isesese ye bhi ek fayeda hota hai yedi admin chae tabhi koi entery kr sakta hai bina admin ke permission ke bina koi user enter nhi kr sakta hai uske server ya site ka access 


const isAdmin = function (req,res,next) {
  console.log("In side the Admin wala middleware hai ye to")
  if (req.user.role === "Admin") {
    next()
  }

  else{
    res.json({
      success:false,
      message:"access denaid dont use the admint without permission using student"
    })
  }
}
 

// todo => our Own Routes :-


router.get("/student",auth,isStudent,(req,res)=>{ // todo => aab iska mtlb ye hua ki aab yeha per sequense wise chalega means pehle auth,phir student.
 console.log("Im inside the student")
 req.send("student ke liye hai ye route")
})


router.get("/admin",auth,isAdmin,(req,res)=>{
  console.log("Im inside the Admin")
req.send("ye Admin ke according hota hai ")

})