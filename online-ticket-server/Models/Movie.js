const mongoose=require("mongoose");
const mongooseErrorHandler = require('mongoose-validation-error-message-handler');

const Schema=mongoose.Schema;
const MovieSchema=new Schema({
    MovieName:{
        type:String,
        unique:true,
        required:true
    },

    date:{
        type:String,
        maxlength:40,
        required:true
    },

    description:{
        type:String,
        maxlength:100,
        required:true
    },

    cast:{
        type:String,
        maxlength:100,
        required:true
    },

    theater:{
        type:String,
        maxlength:40,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    dates:{
        type:String,
        required:true
    },

    imageFile:{
        type:String
    }

})

const Movie=mongoose.model("Movies",MovieSchema);


module.exports=Movie;