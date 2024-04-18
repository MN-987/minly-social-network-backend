import { unLikeMedia } from "./../services/media.service";
import cloudinary from "../config/cloudaniry";
import { ErrorClass } from "../utils/errorHandling";
import { Request, Response } from "express";
import * as mediaService from "../services/media.service";
import { upload } from "../config/multer.config";

 

export const postUploadMedia = async (req: Request, res: Response, next) => {
  // for now It is user Id but it will be token based in future
  const { uploaderUserId } = req.body;
  console.log("req.file", req.file);  

  if(req.file.mimetype=== 'video/mp4'){
    console.log("video file")
  }
  
  const uploadedMedia = await cloudinary.uploader.upload(req.file.path, {
    resource_type: req.file.mimetype==='video/mp4' ? "video": "auto",
    upload_preset: "unsigned_upload",
    allowed_formats: ["png", "mp4", "jpeg", "jpg", "gif","heic"],
  });
  const result = await mediaService.createMedia(uploadedMedia, uploaderUserId);

  if (!result) {
    return next(new ErrorClass("Media not uploaded", 400));
  }
  return res
    .status(200)
    .json({ message: "Media uploaded successfully", data: result });
};

export const delDeleteMedia = async (req: Request, res: Response) => {
  const { mediaId } = req.body;
  const deletedMedia = await cloudinary.uploader.destroy(mediaId);
  return res
    .status(200)
    .json({ message: "Media deleted successfully", data: deletedMedia });
};

export const getAllMedia = async (req: Request, res: Response) => {
  const media = await mediaService.getAllMedia();
  return res.status(200).json({ message: "All Media", data: media});
};

// export const getAllMediaPaginated = async (req: Request, res: Response) => {
//   console.log("================")
//   console.log("entered")
// console.log("req.query",req.query)
//   const page = parseInt(req.query.page) || 1;
//   const pageSize = parseInt(req.query.pageSize) || 3;
//   console.log(   "page is" , page , "pageSize is" ,pageSize) 
//   const media = await mediaService.getAllMedia(page, pageSize);
  
//   return res.status(200).json({ message: "All Media", data: media });
// };

export const postLikeMedia = async (req: Request, res: Response) => {
  const { mediaId, userId } = req.body;
  const likedMedia = await mediaService.likeMedia(mediaId, userId);
  return res
    .status(200)
    .json({ message: "Media liked successfully", data: likedMedia });
};

export const postUnLikeMedia = async (req: Request, res: Response) => {
  const { mediaId, userId } = req.body;
  const unLikeMedia = await mediaService.unLikeMedia(mediaId, userId);
  return res
    .status(200)
    .json({ message: "Media liked successfully", data: unLikeMedia });
};


// export const testUpload = async (req: Request, res: Response) => {
//   console.log(req.file);
//   return res.status(200).json({ message: "Media test successfully" });
// };
