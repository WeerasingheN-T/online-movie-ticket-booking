const router=require("express").Router();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Movie=require("../Models/Movie.js");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'C:/Users/Asela/OneDrive/Documents/Research Project Management Tool/online-ticket-management-tool/src/Photo');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

http://localhost:8073/movie/add

router.route("/add").post(upload.single('imageFile'),async(req,res)=>{

    const MovieName=req.body.MovieName;
    const date=req.body.date;
    const description=req.body.description;
    const cast=req.body.cast;
    const theater=req.body.theater;
    const time=req.body.time;
    const dates=req.body.dates;
    const imageFile=req.file.filename;

    const newMovie=new Movie({
         
        MovieName,
        date,
        description,
        cast,
        theater,
        time,
        dates,
        imageFile
    })

    newMovie.save().then(()=>{
        res.json("Movie added");
    }).catch((err)=>{
        console.log(err);
    })
});

http://localhost:8073/movie

router.route("/").get((req,res)=>{
    Movie.find().then((Movies)=>{
        res.json(Movies)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8073/movie/update/5fsadfsad54asdfsad

router.route("/update/:id").put(async(req,res)=>{
    let movieid=req.params.id;
    const{MovieName,date,description,cast,theater,time,dates}=req.body;

    const updateMovie={
        MovieName,
        date,
        description,
        cast,
        theater,
        time,
        dates

    }

    const update=await Movie.findByIdAndUpdate(movieid,updateMovie).then(()=>{

        res.status(200).send({status:"Movie updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })
})

http://localhost:8073/movie/delete/5fsadfsad54asdfsad

router.route("/delete/:id").delete(async(req,res)=>{

    let movieid=req.params.id;
    await Movie.findByIdAndDelete(movieid)
    .then(()=>{
        res.status(200).send({status:"Movie deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete movie",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    const Movieid=req.params.id;
    const MovieCasts=await Movie.findById(Movieid)
    .then((movies)=>{
        res.status(200).send({status:"Movie found",movies})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message})
    })
})

module.exports=router;


