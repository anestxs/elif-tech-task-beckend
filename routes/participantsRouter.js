import express from "express";
import {
  createParticipant,
  getAllParticipants,
} from "../controllers/participantsControllers.js";

const participantsRouter = express.Router();
const jsonParser = express.json();

participantsRouter.get("/", getAllParticipants);
participantsRouter.post("/register/:id", jsonParser, createParticipant);

export default participantsRouter;
