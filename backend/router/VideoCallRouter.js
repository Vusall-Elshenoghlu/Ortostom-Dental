import express from "express";
import { sendVideoCallEmail } from "../controller/VideoCallController.js";

export const VideoCallRouter = express.Router();

VideoCallRouter.post("/send-email", sendVideoCallEmail);