const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema =new Schema({
    name:{
      type: String,
      required:true,
      unique:true  
    },
    dob:{
            type:Date,
            required:true,
    },
    mobnumber:{
        type:String,
        required:true,
        unique:true
    },

    email:{
            type:String,
            required:true
    },
       
},
{
    timestamps: true,

});

var Contacts = mongoose.model('Contact',contactSchema);
module.exports =Contacts;