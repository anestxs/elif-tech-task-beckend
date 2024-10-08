import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import eventsRouter from "./routes/eventsRouter.js";
import participantsRouter from "./routes/participantsRouter.js";

import "./db/db.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/events", eventsRouter);
app.use("/api/participants/", participantsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});
