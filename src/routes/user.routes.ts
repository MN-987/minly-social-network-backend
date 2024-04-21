import { Router } from "express";
import { asyncHandler } from "../utils/errorHandling";

const router = Router();

router.route(":user_id/photos");
router.route(":user_id/videos");

router.route(":user_id/liked-media");

export default router;
