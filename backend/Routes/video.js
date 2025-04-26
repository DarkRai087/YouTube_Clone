import express from 'express';
import { getAllVideo, uploadVideo, getVideo, getAllVideosByUserId, updateViews } from '../Controllers/video.js';
import { auth } from '../Controllers/auth.js';
const router = express.Router();

router.post("/", auth, uploadVideo);
router.get("/", getAllVideo);
router.get('/:id', getVideo);
router.put('/:id', updateViews);
router.get('/:id/channel', getAllVideosByUserId);
export default router;