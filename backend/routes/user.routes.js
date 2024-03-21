import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUser, getUsersForSidebar } from "../controllers/user.controller.js";
import { updateUserProfile } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.post("/profile", protectRoute, updateUserProfile);
router.get("/getUser", protectRoute, getUser)

export default router;