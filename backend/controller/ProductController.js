import { ProductModel } from "../model/ProductModel.js";
export const ProductController = {
    getAll: async (req,res) =>{
        let products = await ProductModel.find()
        res.send(products)
    },
    getById: async (req,res) =>{
        let id = req.params.id
        let myProd = await ProductModel.findById(id)
        res.send({
            message:"Success getById..",
            data:myProd
        })
    },
    deleteData: async (req,res) =>{
        let id = req.params.id
        await ProductModel.findByIdAndDelete(id)
        res.send("Success delete...")
    },
    updateData: async (req,res) =>{
        let id = req.params.id
        let updatedProd = await ProductModel.findByIdAndUpdate(id,req.body,{new:true})
        res.send({
            message:"Success update...",
            data:updatedProd
        })
    },
    postData: async (req,res) =>{
        let newProd = await ProductModel(req.body)
        newProd.save()
        res.send({
            message:"Success post...",
            data:newProd
        })
    }
}