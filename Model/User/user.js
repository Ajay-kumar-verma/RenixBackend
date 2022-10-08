const mongoose = require('mongoose')
// const {delObj}=require('../controller/deleteObjs');
const { Schema } = mongoose;

// const {hashPswd}=require("../middleware/hashPswd"); 

const usersSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email:{type: String, 
      required: true },
    password:{
        type:String,
        require:true,
       },    
  
})


usersSchema.pre("save", async function(next){
  // console.log("save mongoose middle is called ");
  const plainText=this.password;  
  const hspswd=await hashPswd(plainText);   
  this.pswd=hspswd;
  //   console.log("Hashed paswword "+hspswd);
  //   console.log("plain paswword "+plainText);
  //  console.log("Data before saved ",this)
 
  next();
})


usersSchema.pre("updateOne", async function(next){
  // console.log("updateOne is called ");
  // console.log("update",this._update);
  const plainText=this._update.password;
  this._update.password=await hashPswd(plainText)
  // console.log("update",this._update);
  next();
 return ; 
})

usersSchema.pre("deleteOne",async function (next){

//  console.log("pre delete method is called ...!")
 const {_id} =this._conditions;
//  console.log({_id});
 await  delObj({_id});

 next();
 return ; 
})





module.exports = mongoose.model('user',usersSchema)

