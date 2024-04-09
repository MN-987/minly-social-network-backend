import { url } from "inspector";
import mongoose from "mongoose";
import { Document, Schema, Model, model } from "mongoose";
import User from "./user.model";


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
        count: {
            type: Number,
            default: 0
        },
        usersLiked: [{
            ref: 'User',
            type: mongoose.Schema.Types.ObjectId,
        }]
    },
    mediaId: String
})


// Middleware to increment the counter on every save
// mediaSchema.pre('save', async function(next) {
//     try {
//         if (!this.isNew) { // Check if the document is being updated
//             return next();
//         }

//         const totalCount = await this.constructor.countDocuments();
        
//         this.mediaId = String(totalCount + 1);
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

const Media = mongoose.model('Media', mediaSchema);

export default Media;

