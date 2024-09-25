import Participant from "../models/participant.js";
import Event from "../models/event.js";
import { createParticipantSchema } from "../schemas/participantSchema.js";

export async function getAllParticipants(req, res) {
  const { eventId } = req.params;
  try {
    const participants = await Participant.find({
      participantOfEvent: eventId,
    });

    if (participants.length === 0) {
      return res
        .status(404)
        .json({ message: "No participants found for this event" });
    }

    res.status(200).json(participants);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error!" });
  }
}

export async function createParticipant(req, res) {
  const { error, value } = createParticipantSchema.validate(req.body);

  if (error) {
    return res.status(400).send({ message: error.message });
  }

  const { name, email, dateOfBirth } = value;
  const { eventId } = req.params;

  try {
    const event = await Participant.create({
      name,
      email,
      dateOfBirth,
      participantOfEvent: eventId,
    });

    res.status(201).send(event);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error!" });
  }
}
