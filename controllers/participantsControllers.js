import Participant from "../models/participant.js";
import Event from "../models/event.js";
import { createParticipantSchema } from "../schemas/participantSchema.js";

export async function getAllParticipants(_, res) {
  try {
    const participants = await Participant.find();

    res.status(200).send(participants);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error!" });
  }
}

export async function createParticipant(req, res) {
  const { error, value } = createParticipantSchema.validate(req.body);

  if (error) {
    return res.status(400).send({ message: error.message });
  }

  const { name, email, dateOfBirth } = value;
  const id = req.params.id;

  try {
    const event = await Participant.create({
      name,
      email,
      dateOfBirth,
      participantOfEvent: id,
    });

    res.status(201).send(event);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error!" });
  }
}
