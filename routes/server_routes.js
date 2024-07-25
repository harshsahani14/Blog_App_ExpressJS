const express = require('express');
const router = express.Router();
const createPost = require('../controler/createPost');
const getPosts = require('../controler/getPosts');
const likePost = require('../controler/likePost')


router.post('/posts/create',createPost.createPost);
router.get('/posts',getPosts.getPosts);
router.put('/likes/like/:id',likePost.likePost);

module.exports=router;
