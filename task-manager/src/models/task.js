const mongoose = require('mongoose')
const Task=mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true,
        validate:{validator:function(val){
            if(val.length>30){
                return true;
            } throw new Error('length shoud be grater than 30')
        },
    }
    },
    completed:{
        default:false,
        type:Boolean
    }
})
module.exports=Task