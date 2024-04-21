
import {registerUser} from '../services/auth.service';
import IUser from '../types/user.type';
import { Request, Response } from 'express';


 export const postRegister= async (req:Request, res:Response):Promise<Response> => {
     const user:IUser = await registerUser(req.body );
     return res.status(201).json({
        status: "success",
        data: {
            user
        }
    });
}

export const postLogin= async (req:Request, res:Response):Promise<Response> => {
    // Add auth logic here later
}