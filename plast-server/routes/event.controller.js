import express from 'express';
import EventController from "../controllers/event.controller.js";
import verifyFirebaseToken from '../middlewares/verifyToken.js';

const router = express.Router();
const eventController = new EventController()

router.post('/create-event', verifyFirebaseToken, eventController.createEvent);
router.get("/", eventController.getAllEvent);
router.get("/:id", eventController.getEventById);

export default router;