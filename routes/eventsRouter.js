import express from "express";
import { getAllEvents } from "../controllers/eventsControllers.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);

export default eventsRouter;
