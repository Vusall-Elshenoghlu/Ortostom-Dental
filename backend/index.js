import express from "express"
import cors from "cors"
import { route } from "./router/ProductRouter.js"
import { connect } from "mongoose"
const app = express()
app.use(express.json())
app.use(cors())
app.use("/products",route)

app.listen(3000,() =>{
    console.log("Server is running on port 3000...")
    connect("mongodb+srv://vusalehaf206:vusal206206@learn.ravyg.mongodb.net/")
    .then(() =>{
        console.log("Connected...")
    })
})