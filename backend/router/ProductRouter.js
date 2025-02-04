import express from "express"
import { ProductController } from "../controller/ProductController.js"
import { ProductMiddleware } from "../middlewares/ProductMiddleWare.js"
export const route = express.Router()
route.get("/",ProductController.getAll)
route.post("/",ProductMiddleware,ProductController.postData)
route.get("/:id",ProductController.getById)
route.put("/:id",ProductController.updateData)
route.delete("/:id",ProductController.deleteData)