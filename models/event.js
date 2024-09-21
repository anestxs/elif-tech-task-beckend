import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for contact"],
    },
    description: {
      type: String,
    },
    eventDate: {
      type: Date,
      required: [false],
    },
    organizer: {
      type: String,
      required: [false],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);
