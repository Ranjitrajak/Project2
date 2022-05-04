
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId


const InterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
        

    },
    mobile:{
        
            type: Number,
            required:true,
            trim:true
        },
            
          
    
        
       
    collegeId:{
        type:ObjectId,
        ref:"College",
        required:true,
        trim:true

    },
    isDeleted: {boolean, default: false}
}, { timestamps: true });

    
   


module.exports = mongoose.model('Intern',InterSchema) 


