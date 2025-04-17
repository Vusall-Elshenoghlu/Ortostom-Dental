import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
    name:String,
    surname:String,
    email:String,
    password:String,
    resetPasswordToken:String,
    resetPasswordExpires:Date,
    address:{type:Object,default:{line1:"",line2:""}},
    gender:{type:String,default:"Not selected"},
    dob:{type:String,default:"Not Selected"},
    phone:{type:String,default:"000000000"},
    confirmPassword:Number
})
export const UserModel = model("user",UserSchema)