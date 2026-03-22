import express from "express";
import { register, login, me } from "../controllers/auth.controller.js";
import auth from "../middleware/auth.middleware.js";
import { googleLogin } from "../controllers/googleAuth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleLogin);
// private route
router.get("/me", auth, me);

export default router;