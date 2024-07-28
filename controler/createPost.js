const Post = require('../models/Post');

exports.createPost = async (req,res)=>{

    try{
        
        const {title,content} = req.body;

        const post = new Post({
            title:title,
            content:content
        })

        const data = await post.save();

        res.status(200).json({
            sucess:true,
            data:post,
            message:"Post saved in DB" 
        })

    }
    catch(e){

        res.status(500).json({
            sucess:false,
            data:null,
            message:e.message
        })

    }
}