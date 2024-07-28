const Post = require('../models/Post');
const Like = require('../models/Like')
exports.unLikePost = async (req,res)=>{

    try{
       
        const {post,like} = req.body;

        const unLike = await Like.findByIdAndDelete({_id:like})

        const updatedPost = await Post.findByIdAndUpdate(post,{ $pull :{likes:like}} ,{new :true})

        res.status(200).json({
            sucess:true,
            data:updatedPost,
            message:"Post unliked sucessfully"
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