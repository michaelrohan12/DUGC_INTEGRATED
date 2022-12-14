import Course from "../models/Course.js"
import bigPromise from "../middlewares/bigPromise.js"


export const createCourse = bigPromise(async(req,res,next)=>{

    const {name,code ,sem, credit, format}=req.body;
    if((!name) || (!code) || (!sem) || (!credit) || (!format)){
        return res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
    }

        const course = await Course.create({
            name,
            code,
            sem,
            credit,
            format
        })
    
        if(!course){
            return res.status(500).json({
                message: "error creating user"
            })
        }
        return res.status(201).json({
            success:true,
            message:"Course Created Successfully !",
            data:course
        })


})


export const findCourse = bigPromise(async(req,res,next)=>{

    const {sem }= req.query
    
    const course = await Course.find({sem : sem}).catch(err => {
        console.log(`error getting courses`)
        return null
    })
    
    if(!course){
        return res.status(500).json({
            message: "error getting course"
        })
    }
    return res.status(201).json({
        success:true,
        message:"course get Successfully !",
        data:course
    })
})

export const deleteCourse = bigPromise(async(req,res,next)=>{
    const {id} =req.query

    console.log(id)
    const rvalue = Course.findByIdAndDelete({_id : id}).catch(err=>{
        console.log('error finding course by ID')
        return null
    })

    if(!rvalue){
        return res.status(300).json({
            message:"error finding course ny id"
        })
    }
    return res.status(201).json({
        success:true,
        message:"course delete Successfully !"
    })
})




