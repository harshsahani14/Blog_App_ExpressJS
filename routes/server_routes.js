const express = require('express');
const router = express.Router();
const createPost = require('../controler/createPost');
const getPosts = require('../controler/getPosts')


router.post('/posts/create',createPost.createPost);
router.get('/posts',getPosts.getPosts);

module.exports=router;
