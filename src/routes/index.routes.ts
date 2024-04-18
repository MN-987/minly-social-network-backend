import connectDB from "../config/dbConnection";
import { globalErrorHandling } from "../utils/errorHandling";
import { Response } from "express";
import authRouter from "./auth.routes";
import mediaRouter from "./media.routes";

import cors from "cors";

const bootstrap = (app, express) => {
  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"] 
    })
  );
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/media", mediaRouter);

  app.use("*", (req: Request, res: Response) => {
    return res.json({ message: "In-valid Routing" });
  });
  app.use(globalErrorHandling);
  connectDB();
};

export default bootstrap;