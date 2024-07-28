const express = require('express');
const router = express.Router();
const createPost = require('../controler/createPost');
const getPosts = require('../controler/getPosts');
const likePost = require('../controler/likePost');
const unLikePost = require('../controler/unlikePost');
const comment = require('../controler/comment');


router.post('/posts/create',createPost.createPost);
router.get('/posts',getPosts.getPosts);
router.post('/likes/like',likePost.likePost);
router.post('/likes/unlike',unLikePost.unLikePost);
router.post('/comments/create',comment.createComment);
router.get('/comments',comment.getComments);



module.exports=router;
