const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/student-api",{

// handling depreication warning 

useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true 
}).then(()=>{
    console.log("succesful connection ")
}).catch((e)=>{
    console.log("Oops ....No connection")
})

