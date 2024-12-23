const router=require("express").Router();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const {createJWT, } = require("../authorizations/ProductionTeam.js");
let ProductionTeam=require("../Models/ProductionTeam.js");
const Team=require("../Models/ProductionTeam.js");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'C:/Users/Asela/OneDrive/Documents/Research Project Management Tool/online-ticket-management-tool/src/Photos');
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

http://localhost:8073/team/add

router.route("/add").post(upload.single('imageFiles'),async(req,res)=>{

    const team=req.body;
    
    const email=await Team.findOne({email:team.email});

    if(email){
        res.json({message:"Email has already been taken"});
    }

    else{
         team.password=await bcrypt.hash(req.body.password,8);

    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const MemberId=req.body.MemberId;
    const imageFiles=req.file.filename;

         const newTeam = new ProductionTeam({
           firstName,
           lastName,
           MemberId,
           email:team.email,
           password:team.password,
           imageFiles
         })
         newTeam.save().then(()=>{
            res.json("Team member added");
        }).catch(err =>{
          console.log(err);
      });
    }
  });

http://localhost:8073/team

router.route("/").get((req,res)=>{
    ProductionTeam.find().then((ProductionTeams)=>{
        res.status(200).send({status:"Production team member updated"})
        res.json(ProductionTeams)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8073/team/update/5fsadfsad54asdfsad

router.route("/update/:id").put(upload.single('imageFiles'),async(req,res)=>{
    let teamid=req.params.id;
    const{firstName,lastName,MemberId,email,password}=req.body;

    const updateTeam={
        firstName,
        lastName,
        MemberId,
        email,
        password

    }

    bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
        if (err) throw err;
        updateTeam.password = hash;
        ProductionTeam.findByIdAndUpdate(teamid,updateTeam).then(()=>{

        res.status(200).send({status:"Production team member updated"})
          }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
       })
     });
   });
 });


http://localhost:8073/team/delete/5fsadfsad54asdfsad

router.route("/delete/:id").delete(async(req,res)=>{

    let teamid=req.params.id;
    await ProductionTeam.findByIdAndDelete(teamid)
    .then(()=>{
        res.status(200).send({status:"Production team member deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete member",error:err.message});
    })
})

router.route("/get/:email").get(async(req,res)=>{
    let email=req.params;
    ProductionTeam.findOne(email,(err,newTeam)=>{
        if(newTeam){
               res.send({message:"Production team member found",newTeam:newTeam})
        }
        else{
            res.send("not register");
        }
    })
})

router.route("/login").post(async(req,res)=>{
    const {email,password} =req.body;
    ProductionTeam.findOne({ email: email }).then(newTeam => {
        if (!newTeam) {
          return res.status(404).json({
            errors: [{ newTeam: "not found" }],
          });
        } else {
           bcrypt.compare(password, newTeam.password).then(isMatch => {
              if (!isMatch) {
               return res.status(400).json({ errors: [{ password:
  "incorrect" }] 
               });
              }

        let access_token = createJWT(
          newTeam.email,
          newTeam._id,
          3600
        );
        jwt.verify(access_token, `${process.env.TOKEN_SECRET}`, (err,
  decoded) => {
          if (err) {
             res.status(500).json({ erros: err });
          }
          if (decoded) {
              return res.status(200).json({
                 success: true,
                 token: access_token,
                 message: newTeam
              });
            }
          });
        
         }).catch(err => {
            res.status(500).json({ erros2: err });
         });
       }
    }).catch(err => {
       res.status(500).json({ erros: err });
    });
});

module.exports=router;
