import Media from "../models/media.model";

export const createMedia = async(mediaObj,userId)=>{

 return await Media.create({
    uploaderUserId:userId,
    mediaType:mediaObj.resource_type,
    mediaUrl:mediaObj.secure_url,
    mediaId:mediaObj.public_id
 });
}