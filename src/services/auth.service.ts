import User from '../models/user.model';

import IUser from "../types/user.type";

export const registerUser = async ( userObj:IUser) => {
    console.log(userObj)
    return await User.create(userObj);
};
