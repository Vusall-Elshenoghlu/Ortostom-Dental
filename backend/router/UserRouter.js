import express from "express"
import  {UserController}  from "../controller/UserController.js"
export const userRoute = express.Router()

userRoute.get("/",UserController.getAll)
userRoute.get("/:id",UserController.getById)
userRoute.delete("/:id",UserController.deleteUser)
userRoute.put("/:id",UserController.editUser)
userRoute.post("/register",UserController.register)
userRoute.post("/login",UserController.login)
userRoute.post("/confirm",UserController.confirm)