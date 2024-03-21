import express from "express";
import { login, logout, signup, people} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/people", people);

router.post("/logout", logout);

export default router;