import { Router } from "express";
import { asyncHandler } from "../utils/errorHandling";
import { validation } from "../middlewares/validators/validation";
import { registerUser } from "../middlewares/validators/auth.validators";
import { postRegister } from "../controllers/auth.controllers"


const router = Router();

router.route("/register").post(validation(registerUser), asyncHandler(postRegister));

router.route("/login").post(asyncHandler);

router.route("/logout").post(asyncHandler);

export default router;
