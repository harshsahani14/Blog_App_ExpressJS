const Post = require('../models/Post');

// Needs testing after liking routes are created
exports.getPosts = async (req,res)=>{

    try{
       const posts = await Post.find({}).populate("comments").populate("likes");

       res.status(200).json(
        {
            sucess:true,
            data:posts,
            message:"Posts fetched sucessully"
        }
       )
    }
    catch(e){

        res.status(500).json({
            sucess:false,
            data:null,
            message:e.message
        })
        
    }
}