const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {

        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true,
        },
        like:{
            type:Boolean,
            default:false,
        },
        comments:{
            type:Array,
            default:[]
        }
    }
)

module.exports = mongoose.model('Post',PostSchema);