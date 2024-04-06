
import connectDB from "../config/dbConnection"
import { globalErrorHandling } from "../utils/errorHandling"


const bootstrap = (app,express) => {
    app.use(express.json())
    
    app.use(express.urlencoded({extended:true}))
    app.use("*",(req, res, next)=>{
        return res.json({message : "In-valid Routing"})
    })
    app.use(globalErrorHandling);
    
}


export default bootstrap