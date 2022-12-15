// Import Dependencies
import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { strict } from "assert";

const makeUpMinorSchema = new mongoose.Schema({
    studentName:{
        type:String,
        maxleght:20
    },
    usn:{
        type:String,
        maxleght:13
    },
    sem:{
        type:Number
    },
    courses:[{
        course:{type:String},
        code:{type:String},
        approval:{type:Boolean,
        default: false},
        Reject:{type:Boolean,default:false}
    }],
    reason:{
        type:String
    },
    year:{
        type: Number,
    }
}
)
const makeUpMinor = mongoose.model("MakeUpMinor",makeUpMinorSchema);
export default makeUpMinor;