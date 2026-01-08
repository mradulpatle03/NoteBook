import express from "express";
import {
  updateProfile,
  getUserByUsername,
  getAllUsers,
  searchUsers,    
} from "../controllers/user.controller.js";
import auth from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();


router.get("/search", auth, searchUsers);
router.get("/", auth, getAllUsers);
router.get("/:username", auth, getUserByUsername);
// update profile
router.put(
  "/profile",
  auth,
  upload.single("avatar"),
  updateProfile
);

export default router;