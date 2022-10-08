const express=require('express');
const router=express.Router();

router.all("*", (req,res)=>{
    const {info}=req;
    const obj={message: `${info.URL} is not defined `+path(info.Path),
    error:`Invalid Ethier Url or method `,method:`${req.method}`} 
    console.log(obj);   
    res.status(404).send(obj);
 
    function path(data){
        if(data=="")return ""
        else return `in ${data}`; 
    }

})
  

module.exports=router;
