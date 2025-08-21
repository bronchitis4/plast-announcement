import express from 'express';
import AnnouncedController from '../controllers/announced.controller.js';

const router = express.Router();
const announcedController = new AnnouncedController();

router.post('/new-annouced', announcedController.addAnnounced);
router.get('/:id', announcedController.getAllAnnoucedsById);

export default router;