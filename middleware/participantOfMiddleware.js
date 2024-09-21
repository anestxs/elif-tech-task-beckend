import Event from "../models/event.js";

export default async function participantOf(req, res, next) {
  const id = req.params.id;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).send({ message: "Event not found!" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error!" });
  }
}
