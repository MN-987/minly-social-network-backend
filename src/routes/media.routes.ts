import { Router } from "express";
import { asyncHandler } from "../utils/errorHandling";
import { postUploadMedia ,delDeleteMedia} from "../controllers/media.controllers";

const router = Router();

router.route("/")
.post(asyncHandler(postUploadMedia))
.delete(asyncHandler(delDeleteMedia));

export default router;