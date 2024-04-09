import { postLogin } from './../controllers/auth.controllers';
import { Router } from "express";
import { asyncHandler } from "../utils/errorHandling";
import { postUploadMedia ,delDeleteMedia ,getAllMedia, postLikeMedia, postUnLikeMedia} from "../controllers/media.controllers";
import {upload} from "../config/multer.config";

const router = Router();

router.route("/")
.get(asyncHandler(getAllMedia))
.post(upload.single("file") ,asyncHandler(postUploadMedia))
.delete(asyncHandler(delDeleteMedia));

router.route("/like").post(asyncHandler(postLikeMedia));
router.route("/un-like").post(asyncHandler(postUnLikeMedia));

// router.route("/test").post( upload.array("file"),asyncHandler(testUpload));
export default router;