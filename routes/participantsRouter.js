import express from "express";
import { createParticipant } from "../controllers/participantsControllers.js";

const participantsRouter = express.Router();
const jsonParser = express.json();

participantsRouter.get("/");
participantsRouter.post("/register/:id", jsonParser, createParticipant);

export default participantsRouter;
