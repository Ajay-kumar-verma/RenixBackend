const express=require('express');
const router=express.Router();
const URL=``;

router.use("/user",require('./Controller/User/user.js'));


router.all("*", (req,res,next)=>{
  const Path=`${URL}`;
  const info={Path,METHOD:`${req.method}`,URL:`${req.url}`};
  req.info=info;
  next(); 
},require('./Controller/Error/error'));

module.exports=router;