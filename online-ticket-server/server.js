const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const add=require('./Routes/Movies.js');
const app=express();
require("dotenv").config();


const PORT=process.env.PORT || 8073;

app.use(cors());
app.use(bodyParser.json());
app.use('/add', express.static('add'));

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, err => {
    if(err) throw err;
        console.log('Connected to MongoDB!!!');
});

const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDb connection suc");
})

const MovieRouter=require("./Routes/Movies.js");
const TeamRouter=require("./Routes/ProductionTeams.js");

http://localhost:8073/movie
app.use("/movie",MovieRouter);

http://localhost:8073/team
app.use("/team",TeamRouter);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})