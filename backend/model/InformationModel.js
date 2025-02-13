import {Schema,model} from "mongoose"
export const InformationSchema = new Schema({
    title:String,
    header:String,
    secondHeader:String,
    firstParagraph:String,
    infos:Object,
    secondParagraph:String
})
export const InformationModel = model("/information",InformationSchema)
