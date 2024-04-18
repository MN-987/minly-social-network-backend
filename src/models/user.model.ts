import mongoose from "mongoose";
import { Document, Schema, Model, model } from "mongoose";
import IUser from "../types/user.type";


interface UserDocument extends IUser, Document {} 
interface UserModel extends Model<UserDocument> {}


const   userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },  
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User:UserModel = model<UserDocument, UserModel>('User', userSchema);
export default User;
