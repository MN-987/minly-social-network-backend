/*
 For scaliability in the future, we can add more metadata fields 
 to the media object. We can create a new model called MediaMetadata 
 to store the metadata of the media object.The MediaMetadata model will 
 have a reference to the Media model. The MediaMetadata model will have 
 any fileds we want
 */

import mongoose from "mongoose";
import { Document, Schema, Model, model } from "mongoose";


const mediaMetadataSchema = new Schema({
    mediaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media',
    },
    name:String,
    value:mongoose.Schema.Types.Mixed
});

const MediaMetadata =model("MediaMetadata",mediaMetadataSchema);

export default MediaMetadata;