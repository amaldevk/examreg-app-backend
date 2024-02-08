const express=require("express")
const router=express.Router()
const examModels=require("../model/exammodel")


router.post("/add",async(req,res)=>{
    let data=req.body
    let examreg=new examModels(data)
    let result=await examreg.save()
    res.send({status:"success"})
})

router.get("/view",async(req,res)=>{
    let data=await examModels.find()
    res.json(data)
})

module.exports=router

