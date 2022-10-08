const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Gender:{
        type: String
    },
    DOB:{
        type: String
    },
    Contact:{
          Phone:{type: String},
          Email:{type: String}
    },
   ID:{
     Type:{type: String},
     id:{type: String},
     images:{
        url:[]
     }
    },
   Address:{
      Permanent:{
        Address1 :{type: String},
        Address2 :{type: String},
        Street:{type: String},
        Area:{type: String},
        Colony:{type: String},
        pincode:{type: String},
        city:{type: String},
        state:{type: String}
      },
      Current:{
        Address1 :{type: String},
        Address2 :{type: String},
        Street:{type: String},
        Area:{type: String},
        Colony:{type: String},
        pincode:{type: String},
        city:{type: String},
        state:{type: String}
      }
      
    },
  CertificateID:{type: String}

})



module.exports = mongoose.model('user',usersSchema)

