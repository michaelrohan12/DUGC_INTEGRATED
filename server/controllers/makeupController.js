import makeUpMinor from "../models/MakeUpMinor.js";
import bigPromise from "../middlewares/bigPromise.js";

export const createApplication = bigPromise(async(req,res,next)=>{

    const {studentName,usn , sem, courses ,reason, year}=req.body;
    // console.log(studentName);
    if((!studentName) || (!usn) || (!sem) || (!courses) || (!reason) || (!year)){
        return res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
    }

        const application = await makeUpMinor.create({
            studentName,
            usn ,
            sem,
            courses,
            reason,
            year
        })
    
        if(!application){
            return res.status(500).json({
                message: "error applying application"
            })
        }
        return res.status(201).json({
            success:true,
            message:"Make up minor form successfully submitted !",
            data:application
        })
})


export const findApplication = bigPromise(async(req,res,next)=>{

    const user = await makeUpMinor.find().catch(err => {
        console.log(`error getting courses`)
        return null
    })

    if(!user){
        return res.status(500).json({
            message: "error getting make up user"
        })
    }
    return res.status(201).json({
        success:true,
        message:"Make up user get Successfully !",
        data:user
    })
})


export const getApprove = bigPromise(async(req, res, next)=>{
    const year = req.query.year;
    const sem1=req.query.sem;
    
    const app = await  makeUpMinor.find({"$and":[{"year": year}, {"sem":sem1},{"courses.approval": true}]}).catch(err=>{
        console.log(`error getting user`)
        return null
    })
    if(!app){
        return res.status(500).json({
            message: 'error getting make user'
        })
    }
    return res.status(201).json({
        success:true,
        message:"Make up user get Successfully",
        data: app
    })
})