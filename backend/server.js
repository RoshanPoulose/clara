import express from "express"
import cors from "cors"
import "dotenv/config"                  
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import orderModel from "./models/orderModel.js"
   
// App config 

const app =express()    
const port =process.env.PORT || 4000
connectDB()
connectCloudinary()
        
// middlewares

app.use(express.json())//Allows your server to understand JSON data sent from frontend (like login forms or product info)
app.use(cors()) //Lets your frontend (React/Angular) talk to your backend (here, Express).
                            
             
// api endpoints          
app.use("/api/user",userRouter);                   
   
app.use("/api/product",productRouter)

app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)                
app.get("/",(req,res)=>{
    res.send("API Working")                                                      
}) 


          
app.listen(port,()=>          
console.log("Server start in Port:"+port)
)                        