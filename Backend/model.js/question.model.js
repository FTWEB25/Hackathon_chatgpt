const mongoose = require('mongoose');

const questionSchema=mongoose.Schema({
    Q:String,
    userId:String,
    isEnded:{
        type:Boolean,
        default:false
    }
})

const QuestionModel=mongoose.model("question",questionSchema)

module.exports=QuestionModel