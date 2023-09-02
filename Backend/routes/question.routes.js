const express=require("express")
const auth=require("../middleware/auth.middleare")
const QuestionModel=require("../model.js/question.model")
const questionRouter=express.Router()

questionRouter.get("/ques",auth,async(req,res)=>{
    try {
        const ques=await QuestionModel.find({userId:req.body.userId})
        res.send[ques[ques.length-1].Q]
    } catch (error) {
        res.send(error)
    }
})

// questionRouter.post("/ans",auth,async(req,res)=>{
//     const payload=req.body
//     try {
//         const ques=await QuestionModel.find({userId:req.body.userId})
//         res.send[ques[ques.length-1].Q]
//     } catch (error) {
//         res.send(error)
//     }
// })


module.exports=questionRouter