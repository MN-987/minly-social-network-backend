import { totalNumberOfPages } from './media.service';
import Media from "../models/media.model";

export const createMedia = async (mediaObj, userId:string) => {
  return await Media.create({
    uploaderUserId: userId,
    mediaType: mediaObj.resource_type,
    mediaUrl: mediaObj.secure_url,
    mediaId: mediaObj.public_id,
  });
};

export const getAllMedia = async (page:number,pageSize:number) => {

  const allMediaCount = await Media.countDocuments();
  const mediaObj= await Media.find().skip((page - 1) * pageSize).limit(pageSize)
    .populate({
      path: "uploaderUserId",
      select: "-email -password -__v -createdAt",
    })
    .select("-email -password -__v -__v -createdAt");
    const totalNum = await Media.countDocuments();
    const totalNumberOfPages = Math.ceil( totalNum / pageSize) 

  return { mediaObj, allMediaCount ,totalNumberOfPages };
  };

export const likeMedia = async (mediaId:string, userId:string) => {
  const media = await Media.findOne({ _id: mediaId, "likes.usersLiked": userId });

    if (media) {
        return media;
    }


  return await Media.findByIdAndUpdate(
      { _id: mediaId },
      { 
          $push: { "likes.usersLiked": userId },
          $inc: { "likes.count": 1 }
      },
      { new: true }   
  );
};

export const unLikeMedia = async (mediaId:string, userId:string) => {
  return await Media.findByIdAndUpdate(
      { _id: mediaId },
      { 
          $pull: { "likes.usersLiked": userId },
          $inc: { "likes.count": -1 }
      },
      { new: true }  
  );
};

