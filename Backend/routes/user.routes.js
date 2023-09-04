const express=require("express")
const userRouter=express.Router()
require('dotenv').config();
const UserModel=require("../model.js/user.model")
const QuestionModel=require("../model.js/question.model")
const bcrypt = require('bcrypt')
const auth=require("../middleware/auth.middleare")
var jwt = require('jsonwebtoken')


userRouter.post("/register",async(req,res)=>{
  //signup
  const {name,email,password}=req.body
  try {
   const user=await UserModel.findOne({email:email})
   if(user){
       res.status(200).json({msg:"User already Exist!!"})
   }else{
       bcrypt.hash(password, 3, async(err, hash)=>{
           // Store hash in your password DB.
           if(err){
               res.status(400).json({error:err.message})  
           }else{
               const user =new UserModel({name,email,password:hash})
               await user.save()
               res.status(200).json({msg:"User has been Registered successfully!!"}) 
           }
       });
   }
   } catch (error) {
   res.status(400).json({error:error.message})
  }
})

userRouter.post("/login",async(req,res)=>{
   //login
   const {email,password}=req.body
   try {
      const user= await UserModel.findOne({email:email})
      if(user){
       bcrypt.compare(password, user.password, function(err, result) {
           // result == true
           if(result){
               var token = jwt.sign({ id:user._id}, 'conpic');
               res.status(200).json({msg:"Login Successfull !!",token:token})
           }else{
               res.status(200).json({msg:"Please check your Password !!"})
           }
       });
      }else{
       res.status(200).json({msg:"User doesn't Exist!!"})
      }
   } catch (error) {
      res.status(400).json({error:error.message}) 
   }
})


userRouter.post('/generate-questions', auth,async (req, res) => {
  const {prompt} = req.body;
  try {
      const fetchModule = await import("node-fetch");
      const fetch = fetchModule.default;

      const response = await fetch(
          'https://api.openai.com/v1/engines/text-davinci-003/completions',
          {
              method: 'POST',
              body: JSON.stringify({
                  prompt: prompt,
                  max_tokens: 2048
              }),
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${process.env.OPEN_API_KEY}`
              }
          }
      );

      const responseBody = await response.json();
      console.log(responseBody)
      const questions = responseBody.choices[0].text.trim();
      
      //req.body.userId
      //to store questions in mongodb
      const question=new QuestionModel({Q:questions,userId:req.body.userId})
      console.log(question)
      try {
        await question.save();
        res.json({ msg: "Question has been saved successfully", text:question });
      } catch (error) {
        console.error('Error saving question:', error);
        res.status(500).json({ error: 'An error occurred while saving the question' });
      }
     

      // res.json({msg:"questions has been saved successfully",questions });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
  }
});



module.exports=userRouter
