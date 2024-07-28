const Post = require('../models/Post');
const Comment = require('../models/Comment')

exports.createComment = async (req,res)=>{

    try{
        
    
       const {post , body , user} = req.body;
        
    //    Creates a comment object
       const comment = new Comment({
            post : post,
            body : body,
            user : user
       })

    //    Save comment in db
       const data = await comment.save()


    //    Find the post and save the id of the comment in the comments array

       const updatedPost = await Post.findByIdAndUpdate(post, { $push:{comments:data._id}  } , {new :true})
                                 .populate("comments")//populate the comment array with actual objects instead of ids 

       res.status(200).json({
        sucess:true,
        data:updatedPost,
        message:"Comment saved in DB"
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

exports.getComments = async (req,res)=>{

    try{
    
        const id = req.params.id;
        
        const post = await Post.findById({_id:id});


        res.status(200).json({
            sucess:true,
            data:post.comments,
            message:"Comments fetched sucessfuly"
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