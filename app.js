import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.get('/',async (req,res)=>{
    console.log(req.query)
    try{
        const resp = await axios({
            ...req.query
        });
        console.log("DATA - ", resp.data);
        res.json({...resp.data})
    }catch(err){
        console.log("ERROR - ", err);
        res.json({
            message: "something went wrong"
        })
    }
})

app.listen(PORT,()=>{
    console.log(`APP STARTED AT ${PORT}`)
})