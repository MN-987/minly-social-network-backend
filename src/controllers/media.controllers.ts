import cloudinary from "../config/cloudaniry";
import {ErrorClass} from "../utils/errorHandling";
import { Request, Response  } from "express";
import * as mediaService from "../services/media.service";

export const postUploadMedia = async (req: Request, res: Response,next) => {

    // for now It is user Id but it will be token based
    const {media,userId}=req.body;
  
 const uploadedMedia=await cloudinary.uploader.upload(media, {
    upload_preset:"unsigned_upload",
        allowed_formats:["png","mp4","jpeg","jpg","gif","mov"],
 }
,function(error,result){
    if(error){
        console.log(error.message)
        return next(new ErrorClass(error.message,400))
    }
}
);
const result= await mediaService.createMedia(uploadedMedia , userId);
if(!result){return next(new ErrorClass("Media not uploaded",400))}
return res.status(200).json({message:"Media uploaded successfully",data:result});
};

export const delDeleteMedia = async (req: Request, res: Response) => {
    const {mediaId}=req.body;
    const deletedMedia=await cloudinary.uploader.destroy(mediaId);
    return res.status(200).json({message:"Media deleted successfully",data:deletedMedia});
};