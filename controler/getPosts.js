const Post = require('../models/Post');

exports.getPosts = async (req,res)=>{

    try{
       const posts = await Post.find({});

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