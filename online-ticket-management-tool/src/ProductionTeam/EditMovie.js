import React,{useState,useEffect,useCallback} from 'react';
import './AddMovie.css';
import {useNavigate} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function EditMovie() {

  const {id}=useParams("");
  const [editMovie,setMovie]=useState({
    _id:'',
    MovieName:'',
    date:'',
    description:'',
    cast:'',
    theater:'',
    time:'',
    dates:'',
});

const histoy=useNavigate();

const setTeam=(e)=>{
  console.log(e.target.value);
  const {name,value}=e.target;
  setMovie((preval)=>{
    return{
      ...preval,
      [name]:value
    }
  })
}

const getTeam = useCallback(() => {
  
  const res=fetch(`http://localhost:8073/movie/get/${id}`,{
    method:"GET",
    headers:{
    "Content-Type":"application/json", 
    }
  });

  const data=res.json();
  console.log(data);

  if(res.status===500||!data){
    console.log("error");
  }

  else{
    const arr=Object.entries(data);
    const res=Object.values(arr);
    const res1=Object.values(res[1]);
    setMovie(res1[1]);
    console.log(res1[1]);
  }

}, [id]);

useEffect(()=>{

  getTeam();
},[getTeam]);

const updateTeam=async(e)=>{
  e.preventDefault();

  const {_id,MovieName,date,description,cast,theater,time,dates}=editMovie;

  const res2=await fetch(`http://localhost:8073/movie/update/${_id}`,{

    method:"PUT",
    headers:{
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
      MovieName,date,description,cast,theater,time,dates
    })
  });

  const data2=await res2.json();
  console.log(data2);

  if(res2.status===500||!data2){
    alert("Fill the data");
  }

  else{
    alert("Movie is updated");
    histoy.push(`/ViewTheMovie/${id}`)
  }
}

return (
 <> 

<div className="base-container1">
<div className="image2">
<div className="containerblock1">

 <form onSubmit={updateTeam} encType="multipart/form-data" >
 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Movie</p>

 <Row>
  <Col>
<div className="form-group">
 <label>Movie Id</label>
 <input type="text" name="_id" className="form-control" id="_id" placeholder="Movie Id" value={editMovie._id} required/>
 </div>
</Col>
<Col>
<div className="form-group">
 <label>Movie Name</label>
 <input type="text" name="MovieName" className="form-control" id="MovieName" placeholder="Movie Name" onChange={setTeam} value={editMovie.MovieName} required/>
 </div>
</Col>
</Row>

<Row>
  <Col>
<div className="form-group">
 <label>Released Date</label>
 <input type="date" name="date" className="form-control" id="date" placeholder="Date" onChange={setTeam} value={editMovie.date} required/>
 </div>
</Col>
<Col>
<div className="form-group">
 <label>Discription</label>
 <textarea name="description" className="form-control" id="description" placeholder="Enter description"  onChange={setTeam} value={editMovie.description} required/>
</div>
 </Col>
</Row>

<Row>
  <Col>
<div className="form-group">
 <label>Cast</label>
 <textarea name="cast" className="form-control" id="cast" placeholder="Enter cast" onChange={setTeam} value={editMovie.cast} required/>
</div>
</Col>
<Col>
<div className="form-group">
 <label>Theater Name</label>
 <input type="text" name="theater" className="form-control" id="theater" placeholder="Theater Name" onChange={setTeam} value={editMovie.theater} required/>
</div>
</Col>

</Row>

<Row>
<Col>
<div className="form-group">
 <label>Showtimes</label>
 <input type="time" name="time" className="form-control" id="time" placeholder="Showtimes" onChange={setTeam} value={editMovie.time} required/>
</div>
</Col>
 <Col>
 <div className="form-group">
 <label>ShowDays</label>
 <input type="text" name="dates" className="form-control" id="dates" placeholder="ShowDays" onChange={setTeam} value={editMovie.dates} required/>
</div>
</Col>
</Row>

<div className="footer">
<button type="submit" className="btn btn-dark btn-lg btn-block" onClick={updateTeam}>Edit Movie</button>
</div>

</form>

</div>
</div>
<div className="lines"></div>
</div>
 </>
    );
  }


export default EditMovie;