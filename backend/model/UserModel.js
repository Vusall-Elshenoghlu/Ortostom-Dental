import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
    name:String,
    surname:String,
    email:String,
    password:String,
    confirmPassword:Number
})
export const UserModel = model("user",UserSchema)