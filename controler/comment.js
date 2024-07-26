const Post = require('../models/Post');

exports.createComment = async (req,res)=>{

    try{
       
        const id = req.params.id;
        const comment = req.body.comment;

        const post = await Post.findById({_id:id});

        const comments = post.comments;

        comments.push(comment)

        const upDatedPost = await Post.findByIdAndUpdate({_id:id},{comments}) 
        
        res.status(200).json(
            {
                sucess:true,
                data:upDatedPost,
                message:"Comment added sucessfuly",
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