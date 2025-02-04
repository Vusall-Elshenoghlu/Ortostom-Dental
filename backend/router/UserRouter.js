import express from "express"
import { UserContoller } from "../controller/UserController.js"
export const userRoute = express.Router()

userRoute.get("/",UserContoller.getAll)
userRoute.get("/:id",UserContoller.getById)
userRoute.delete("/:id",UserContoller.deleteUser)
userRoute.put("/:id",UserContoller.editUser)
userRoute.post("/register",UserContoller.register)
userRoute.post("/login",UserContoller.login)
userRoute.post("/confirm",UserContoller.confirm)