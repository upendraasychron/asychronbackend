const express =require("express");
const app = express();

require("./db/connec");

//we can add our model page here
const Student = require("./models/students");
//we can create port manually 
const port = process.env.PORT || 3100 ;

//its using for recognize incoming req object as json object (middleware)
app.use(express.json());
//create new student 


/* this is all in Promises 
app.post("/students",(req,res)=>{
    const user=new Student(req.body)
    // for save data 
    user.save().then(()=>{
        res.status(201).send(user);
    } ).catch((e)=>{
        res.status(400 ).send(e);
        
    })
     
})  */

//we can use Async & await to here
app.post("/students",async(req,res)=>{
    try{

    const user= new Student(req.body);
    const CreateUser = await user.save();
    res.status(201).send(CreateUser);
    
    }catch(e){
        res.status(400).send(e);
    }

}) 

 // read students using GEt method

app.get("/students",async (req,res)=>{
    try{
       const studentsData = await Student.find()
       res.send(studentsData)


    }catch(e){
        res.send(e) 
    }
})

//get individual student data by id 

app.get("/students/:id",async(req,res)=>{
   
     try{
        const _id=req.params.id 
        const studentData= await Student.findById(_id)
        
        if(!studentData){
            return res.status(404).send();
        }else{
             res.send(studentData)
        }
        res.send(studentData);
     }catch(e){
        res.status(500).send(e);
     }
})

/*//get data by name 
app.get("/students/:name",async(req,res)=>{

    try {
        const name =Student.params.name();
        const studentNameData = await student.find({name:name})

        if(!studentNameData){
            return res.status(404);
        }else{
            res.status(studentNameData);
        }
        
    } catch (e) {
        res.send(e)
    }
}

)

*/
//Update student data by Id
app.patch("/students/:id",async(req,res)=>{
    try {
        const _id= req.params.id;
        const studentUpdates =await Student.findByIdAndUpdate(_id,req.body,{
            new:true  
        })
        res.send(studentUpdates);
        
    } catch (e) {
        res.status(404).send(e);


    }
})


//how to delete data 
app.delete("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentDelete =await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(404).send();
        }res.send(studentDelete)

    } catch (e) {
        res.status(500).send(e)
        
    }

})

// CREATE LISTEN FOR GO ON SPECIFIC PAGE OF SERVER 
app.listen(port,()=>{
    console.log(`our connection is setup at ${port}succesful .....`)
});
