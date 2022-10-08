const express=require('express');
const router=express.Router();
const {getCertificateId} =require('../getCertificateId');

const user = require('../../Model/Renix/User');

const URL='/user';

router.route("/get")
.get( async (req,res)=>{
  let u = await user.find({});
  //  console.log(u)
   res.send(u);
})

router.route("/:CertificateID")
.get(async (req,res)=>{
  const {CertificateID}=req.params;
  const data =await user.findOne({CertificateID});
  const obj={...data._doc,_id:undefined}; 
  res.send(obj);
})


router.route("/")
.post( async  (req,res)=>{
   let CertificateID= await getCertificateId();

    let u = new user({ ...req.body,CertificateID });
   u= await u.save();
   let data = u._doc;
   console.log(data.CertificateID)
   res.send({"certificate ID is":CertificateID});

})





router.all("*", (req,res,next)=>{
  const Path=`${URL}`;
  const info={Path,METHOD:`${req.method}`,URL:`${req.url}`};
  req.info=info;
  next(); 

},require('../Error/error'));
  

module.exports=router;
