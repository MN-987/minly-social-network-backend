import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
         return await mongoose.connect(process.env.DB_URI).then(res => {
            console.log(`DB Connected ....`);
         }).catch (err => {
    console.log(`Fail to connectDB ...${err}`);
   }) 
}
export default connectDB;