const mongoose=require("mongoose");
const mongooseErrorHandler = require('mongoose-validation-error-message-handler');

const Schema=mongoose.Schema;
const ProductionSchema=new Schema({
    firstName:{
        type:String,
        maxlength:40,
        required:true
    },

    lastName:{
        type:String,
        maxlength:40,
        required:true
    },

    MemberId:{
        type:String,
        unique:true,
        maxlength:6,
        required:true
    },

    email:{
        type:String,
        maxlength:100,
        required:true
    },

    password:{
        type:String,
        minlength:8,
        required:true
    },

    imageFiles:{
        type:String
    }

})

const ProductionTeam=mongoose.model("productionteams",ProductionSchema);


module.exports=ProductionTeam;