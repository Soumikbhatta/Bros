import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

//http://localhost:5000/posts

router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);
router.patch('/:id/likePost', auth, likePost);

export default router; 