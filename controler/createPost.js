const Post = require('../models/Post');

exports.createPost = async (req,res)=>{

    try{
        const title = req.body.title;
        const content = req.body.content;

        const post = await Post.create({title,content});

        res.status(200).json({
            sucess:true,
            data:post,
            message:"Entry created sucessfuly" 
        })

    }
    catch(e){

        res.status(500).json({
            sucess:false,
            data:null,
            message:"Error creating entry"
        })

    }
}