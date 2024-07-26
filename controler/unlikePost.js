const Post = require('../models/Post');

exports.unLikePost = async (req,res)=>{

    try{
       const id = req.params.id;

       const like = false;

       const post = await Post.findByIdAndUpdate({_id:id},{like});

       res.status(200).json({
            sucess:true,
            data:post,
            message:"Post liked sucessfully"
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