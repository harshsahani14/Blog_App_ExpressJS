const Post = require('../models/Post');
const Like = require('../models/Like')
exports.likePost = async (req,res)=>{

    try{
       
        const {post,user} = req.body;

        const like = new Like({
            post,user
        })

        const data = await like.save();

        const likePost = await Post.findByIdAndUpdate(post,{ $push :{ likes:data._id} },{new : true})

       res.status(200).json({
            sucess:true,
            data:likePost,
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