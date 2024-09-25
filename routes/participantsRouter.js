import express from "express";
import {
  createParticipant,
  getAllParticipants,
} from "../controllers/participantsControllers.js";

const participantsRouter = express.Router();
const jsonParser = express.json();

participantsRouter.get("/:eventId", getAllParticipants);
participantsRouter.post("/register/:eventId", jsonParser, createParticipant);

export default participantsRouter;
