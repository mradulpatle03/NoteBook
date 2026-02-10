import express from "express";
import auth from "../middleware/auth.middleware.js";
import {
  createTeam,
  getMyTeams,
  getTeamById,
  updateMeetingLink,
} from "../controllers/team.controller.js";

const router = express.Router();

router.post("/", auth, createTeam);
router.get("/my", auth, getMyTeams);
router.get("/:teamId", auth, getTeamById);
router.put("/:teamId/meeting", auth, updateMeetingLink);

export default router;
