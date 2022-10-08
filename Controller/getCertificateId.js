const user = require('../Model/Renix/User');

const getCertificateId=async _=>{
    const id=[];
        id.push("RX");
        let year=new Date().getFullYear();
        id.push(year.toString().slice(2,4));
        id.push("-")
    
        let courseCode="AI";
        id.push(courseCode);
        let batchId="AB"; 
        id.push(batchId);
        id.push("-")
    
      while(true){
        let x = Math.floor((Math.random() * 10000) + 1);
        id.push(x);
      let CertificateID =id.join("");
        let isExist=await user.findOne({CertificateID}) 
          if(isExist) continue;
         else return CertificateID; 
      } 
        
    }
    

module.exports={getCertificateId}   