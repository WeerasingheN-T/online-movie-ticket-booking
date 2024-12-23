import React,{useState,useEffect} from 'react';
import './AddMovie.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col, Table} from 'react-bootstrap';

function ViewMovie() {

  const[movieList,setMovielist]=useState([]);

    useEffect(()=>{

       function getMovies(){
         axios.get("http://localhost:8073/movie").then((res)=>{
          setMovielist(res.data);
         }).catch((err)=>{
           alert(err.message);
         })
       }
       getMovies();

        },[]);

        const deleteMovie=async(_id)=>{
          const res2=await fetch(`http://localhost:8073/movie/delete/${_id}`,{

          method:"DELETE",
          headers:{
            "Content-Type":"application/json"
          }
          });

          const deleteData=await res2.json();
          console.log(deleteData);

          if(res2.status===500||deleteData){
            console.log("error");
          }

          else{
            alert("Movie deleted");
          }
        }

        var viewItems_HTMLTABLE="";

    if(movieList){

        viewItems_HTMLTABLE=
        movieList.map((data)=>{
        return(
          <Row key={data._id}>
           <Col className="Tabletd">{data._id}</Col>
          <Col className="Tabletd">{data.MovieName}</Col>
          <Col className="Tabletd">{data.theater}</Col>
          <Col className="Tabletd">{data.dates}</Col>
          <Col className="Tabletd">{data.time}</Col>
          <Col className="Tabletd"><a href={`./ViewTheMovie/${data._id}`}><img width="200" height="240" src={require(`../Photo/${data.imageFile}`)}/></a></Col>
          <Col><button className="btnn1" onClick={()=>deleteMovie(data._id)}>Delete</button><a href={`./ViewTheMovie/${data._id}`}><button className="btnn1" >View</button></a></Col>
          </Row>

        );
      });
    
    }

    else
    viewItems_HTMLTABLE="loading"


return (
 <> 

<div className="images4">

<div className="card">
    <div className="card-body">
      <h2 className="card-title">Movie Ticket Prices</h2>
      <Row>
        <Col>Movie Tickets for childrens<Col>Rs.200.00</Col></Col>
        <Col>Movie Tickets for Adults(age above 18)<Col>Rs.460.00</Col></Col>
      </Row>
    </div>
  </div>

<Table className="images3">

<Row>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Movie ID</h5></Col>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Movie Name</h5></Col>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Theater</h5></Col>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Show Days</h5></Col>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Show Times</h5></Col>
  <Col><h5 className="text-center fw-bold mb-12 mx-1 mx-md-2 mt-1">Movie </h5></Col>
  <Col></Col>
</Row>
 {viewItems_HTMLTABLE}

  </Table>
 
</div>

 <div className="lines1"></div>
 </>
    );
  }


export default ViewMovie;