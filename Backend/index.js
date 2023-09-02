const express=require("express")
const cors=require("cors")
const fetch =import("node-fetch")
const connection =require("./db")
const userRouter=require("./routes/user.routes")
const questionRouter=require("./routes/question.routes")
require('dotenv').config();

const app=express()

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/question",questionRouter)


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(`server is running at ${process.env.PORT} `)
    } catch (error) {
        console.log(error)
    }
})