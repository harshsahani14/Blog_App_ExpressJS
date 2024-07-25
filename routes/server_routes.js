const express = require('express');
const router = express.Router();
const createPost = require('../controler/createPost')

router.post('/post/create',createPost.createPost);

module.exports=router;
