var jwt = require('jsonwebtoken')

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
       try {
        const decoded=jwt.verify(token, 'conpic');
        if(decoded){
            req.body.userId=decoded.id
         next()
        }else{
         res.json({msg:"not authorised"})
        }
       } catch (error) {
        res.json(error.message)
       }
    }else{
        res.json("Please login first!!")
    }
}

module.exports=auth