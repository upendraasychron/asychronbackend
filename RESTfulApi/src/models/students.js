//we have to make schema of student 
const mongoose = require("mongoose");
const validator =require("validator");


const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

     email:{
         type:String,
         required:true,
         unique:[true,"email is already present"],
         validate(value){
             if(!validator.isEmail(value)){
                 throw new Error("Invalid Email")
             }
         }

     },
     phone:{
         type:Number,
         required:true,
         unique:true

     },
     password:{
         type:String,
         required:true
     },
     empCode:{
         type:String,
         required:true


     },isLoggedIn:{
         type:Boolean,

     },status:{
         type:Boolean
     }
    

})

//we willl create new collection 
const Student = new mongoose.model('Student',studentSchema);

//we can export our page 
module.exports= Student;