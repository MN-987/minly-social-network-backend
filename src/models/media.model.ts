import { url } from "inspector";
import mongoose from "mongoose";
import { Document, Schema, Model, model } from "mongoose";


const mediaSchema = new Schema({
    uploaderUserId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
    }
    , mediaType: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    mediaUrl: String,
    likes:{
        type:Number,
        default:0
    },
    mediaId: String
})

const Media = model('Media', mediaSchema);
export default Media;