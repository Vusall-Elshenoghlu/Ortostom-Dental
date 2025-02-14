import express from "express"
import  {getProfile, UserController}  from "../controller/UserController.js"
import { authUser } from "../middlewares/AuthUser.js"
export const userRoute = express.Router()

userRoute.get("/",UserController.getAll)
userRoute.get("/:id",UserController.getById)
userRoute.delete("/:id",UserController.deleteUser)
userRoute.put("/:id",UserController.editUser)
userRoute.post("/register",UserController.register)
userRoute.post("/login",UserController.login)
userRoute.post("/confirm",UserController.confirm)
userRoute.get("/get-profile",authUser,getProfile)