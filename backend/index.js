import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { userRoute } from "./router/UserRouter.js"
import dotenv from 'dotenv';
import { AppointmentRouter } from "./router/AppointmentRouter.js"
import {DoctorRouter} from "./router/DoctorRouter.js"
import { AdminRouter } from "./router/AdminRoute.js"
import { VideoCallRouter } from "./router/VideoCallRouter.js"
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoute)
app.use("/appointments",AppointmentRouter)
app.use("/doctors",DoctorRouter)
app.use("/admin",AdminRouter)
app.use("/videocall",VideoCallRouter)

app.listen(3000,() =>{
    console.log("Server is running on port 3000...")
    connect("mongodb+srv://vusalehaf206:vusal206206@learn.ravyg.mongodb.net/")
    .then(() =>{
        console.log("Connected...")
    })
})