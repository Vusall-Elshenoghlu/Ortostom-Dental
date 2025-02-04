import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
    username:String,
    email:String,
    password:String,
    confirmPassword:Number
})
export const UserModel = model("user",UserSchema)