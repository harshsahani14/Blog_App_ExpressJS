const express = require('express');
const router = express.Router();
const createPost = require('../controler/createPost');
const getPosts = require('../controler/getPosts');
const likePost = require('../controler/likePost');
const unLikePost = require('../controler/unlikePost');
const comment = require('../controler/comment')

router.post('/posts/create',createPost.createPost);
router.get('/posts',getPosts.getPosts);
router.put('/likes/like/:id',likePost.likePost);
router.put('/likes/unlike/:id',unLikePost.unLikePost);
router.post('/comments/create/:id',comment.createComment);

module.exports=router;
