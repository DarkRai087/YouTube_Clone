import express from 'express';
import { addComment, deleteComment, getComment } from '../Controllers/comment.js';
import { auth } from '../Controllers/auth.js';

const router = express.Router();

router.post("/", auth, addComment);
router.get("/:id", getComment);
router.delete("/:id", auth, deleteComment);
export default router;