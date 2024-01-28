const express = require("express")
const app = express()
const PORT = 8080
const cors = require("cors")
const mysql = require("mysql2")
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
const cookie = require("cookiejs")
const multer = require("multer");

const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const {reject,accept,isCompany,createjob,isUser,createApplication,
    getjobs,getapplications,getAcceptaions,getrejects,deleteApp,deleteJob} = require("./functions")
/******************************************************************** */
dotenv.config() 
const pool = mysql.createPool({
    host:process.env.mysql_host,
    user:process.env.mysql_user,
    password:process.env.mysql_password,
    database:process.env.mysql_database
 }).promise()

 var corsOptions = {
    
    origin: 'http://localhost:3000', // specify the exact origin of your client application
    credentials: true,
    optionSuccessStatus: 200,
}
cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name,
    api_key: process.env.cloudinary_key,
    api_secret: process.env.cloudinary_secret
 })

 const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'bddProject',
        allowedFormats: ['jpeg','png','jpg','pdf']
    }
 })
const upload = multer({storage});
 var corsOptions = {
    
        origin: 'http://localhost:3000', // specify the exact origin of your client application
        credentials: true,
        optionSuccessStatus: 200,
  }
 app.use(cors(corsOptions))
 app.use(express.urlencoded({extended:true}));
 app.use(express.json())
 app.use(cookieParser())


/*******************************************GET******************************************* */

app.get("/jobs",isUser,async(req,res,next)=>{

    const jobs = await getjobs()
    res.json({jobs})
    
})

app.get("/applications",isCompany,async(req,res,next)=>{

    const applications = await getapplications(req.id)
    res.json({applications})
    
})

app.get("/acceptations",isUser,async(req,res,next)=>{

    try{
    const user_id = req.user.id
    const acceptations = await getAcceptaions(user_id)
    res.json({acceptations})
    }catch(err){
        res.json({error:err.message})
    }
    
})

app.get("/rejects",isUser,async(req,res,next)=>{

    try{
    const user_id = req.user.id
    const rejects = await getrejects(user_id)
    res.json({rejects})
    }catch(err){
        res.json({error:err.message})
    }
    
})

/************************************************************************************** */
/************************************POST********************************************** */
app.post('/register',async(req,res) =>{
    try{
        const {username,email,password,type} = req.body
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password,salt)
        //const result = await login(req.body.email,req.body.password)
        // return result
        const [result] = await pool.query(`
            select * from users where username = ? 
            or email = ? 
            `,[username,email])

        console.log(result.length)
        if(result.length === 0){
            const [result] = await pool.query(`
            INSERT INTO users (username, email, password,type)
            VALUES (?, ?, ?,?);
            `,[username,email,hashedPassword,type])
            res.redirect("http://localhost:3000/register")
        }else{
            res.send("sorry username or email already exist")
        }
   
    }catch(err){
        res.send("error")
        console.log(err)
    }
})


app.post('/login',async(req,res) =>{

    const {username,password} = req.body;
    const [result] = await pool.query(`
            select * from users where username = ?
            `,[username])
    console.log(username,password)
    if(result.length > 0){
        if(await bcrypt.compare(password,result[0].password)){  
            const [user] = result
            const accessToken = jwt.sign(user,process.env.token)
           
            res.json({user:user,jwt:accessToken,access:true,message:"loged successfully"})          
            
        }else{
            res.json({message:"username or password incorrect"})
        }

    }else{
        res.json({message:"username or password incorrect"})
    }

})


app.post('/jobs',isCompany,async(req,res) =>{
    
    const company_id = req.user.id;
    const {description,skills} = req.body;
    console.log("company_id is :",company_id)
    console.log(req.user)
    try{
    const result = await createjob(description,skills,company_id)
    res.json(result)
    }catch(err){
        res.json({message:err.message})
    }
})

app.post('/applications',isUser,upload.array('ldm'),async(req,res) =>{
  
    user_id = req.user.id;
    const {skills,job_id} = req.body;
    const ldm = req.files
    try{
    const result = await createApplication(user_id,job_id,skills,ldm)
    res.json(result)
    }catch(err){
        res.json({message:err.message})
    }
})

app.post('/acceptations/:app',isCompany,async(req,res) =>{
  
    const {app} = req.params;
    const company_id = req.user.id;
    console.log("company_id",company_id)
    try{
    const result = await accept(app,company_id)
    res.json(result)
    }catch(err){
        res.json({message:err.message})
    }
})

app.post('/reject/:app',isCompany,async(req,res) =>{
  
    const {app} = req.params;
    const company_id = req.user.id;
    console.log("company_id",company_id)
    try{
    const result = await reject(app,company_id)
    res.json(result)
    }catch(err){
        res.json({message:err.message})
    }
})
/******************************************************************************************** */
app.delete('/applications/:id',isCompany,async(req,res) =>{
  
    const {id} = req.params;
    const company_id = req.user.id

    try{
    const result = await deleteApp(id,company_id)
    res.json(result)
    }catch(err){
        res.json({message:err.message})
    }
})


 /******************************************************************************************* */
app.listen(5000,()=>{
    console.log("listening to port 5000")
})