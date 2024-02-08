const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const examRouter=require("./controllers/examrouter")
const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://amaldev123:amaldev1234@cluster0.dtrzikf.mongodb.net/examregDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/exam",examRouter)

app.use("/api/patient",examRouter)
app.listen(3001,()=>{
    console.log("server running")
})