const mongoose=require("mongoose")

const examScheme=new mongoose.Schema(
    {
        studentName:String,
        regNo:String,
        courseName:String,
        collegeName:String
    }
)

module.exports=mongoose.model("reg",examScheme)