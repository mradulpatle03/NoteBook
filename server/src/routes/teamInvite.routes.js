import express from "express";
import auth from "../middleware/auth.middleware.js";
import {
  inviteUser,
  getMyInvites,
  acceptInvite,
  rejectInvite,
} from "../controllers/teamInvite.controller.js";

const router = express.Router();

// invite a specific user (email / username)
router.post("/user", auth, inviteUser);

// get my pending invites
router.get("/my", auth, getMyInvites);

// accept / reject invite
router.post("/:inviteId/accept", auth, acceptInvite);
router.post("/:inviteId/reject", auth, rejectInvite);

export default router;
