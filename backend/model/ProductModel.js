import { model, Schema } from "mongoose";

export const ProductSchema = new Schema({
    image:String,
    title:String,
    description:String,
    price:Number
})
export const ProductModel = model("products",ProductSchema)