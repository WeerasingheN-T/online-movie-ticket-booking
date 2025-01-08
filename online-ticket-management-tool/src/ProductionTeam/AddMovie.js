import React,{useState}from 'react';
import './AddMovie.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {Row,Col} from 'react-bootstrap';

const AddMovie=() =>{

  const history = useNavigate();

  const [newMovie,setNewMovie]=useState(
    {
  MovieName:'',
  date:'',
  description:'',
  cast:'',
  theater:'',
  time:'',
  dates:'',
  imageFile:''
    }
  );

  const sendMovie=(e)=>{
    e.preventDefault();
    const data =new FormData();
    data.append('MovieName',newMovie.MovieName);
    data.append('date',newMovie.date);
    data.append('description',newMovie.description);
    data.append('cast',newMovie.cast);
    data.append('theater',newMovie.theater);
    data.append('time',newMovie.time);
    data.append('dates',newMovie.dates);
    data.append('imageFile',newMovie.imageFile);
    
    axios.post("http://localhost:8073/movie/add", data).then(()=>{

      alert("Movie is added");

      if(data){
        return history.push("/ViewMovie")
      }
      }).catch((err)=>{
        alert(err);
      })
    }

    const handleChange = (e) => {
      setNewMovie({...newMovie, [e.target.name]: e.target.value});
  }

  const handlePhoto = (e) => {
      setNewMovie({...newMovie, imageFile: e.target.files[0]});
  }


return (
 <> 

<div className="base-container1">
<div className="image2">
<div className="containerblock1">

 <form onSubmit={sendMovie} encType="multipart/form-data">
 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Movie</p>

<Row>
  <Col>
<div className="form-group">
 <label>Movie Name</label>
 <input type="text" name="MovieName" className="form-control" id="MovieName" placeholder="Movie Name" value={newMovie.MovieName} onChange={handleChange} required/>
 </div>
</Col>
<Col>
<div className="form-group">
 <label>Released Date</label>
 <input type="date" name="date" className="form-control" id="date" placeholder="Date" value={newMovie.date} onChange={handleChange} required/>
 </div>
 </Col>
</Row>

<Row>
  <Col>
<div className="form-group">
 <label>Discription</label>
 <textarea name="description" className="form-control" id="description" placeholder="Enter description" value={newMovie.description} onChange={handleChange} required/>
</div>
</Col>
<Col>
<div className="form-group">
 <label>Cast</label>
 <textarea name="cast" className="form-control" id="cast" placeholder="Enter cast" value={newMovie.cast} onChange={handleChange} required/>
</div>
</Col>

</Row>

<Row>
<Col>
<div className="form-group">
 <label>Theater Name</label>
 <input type="text" name="theater" className="form-control" id="theater" placeholder="Theater Name" value={newMovie.theater} onChange={handleChange} required/>
</div>
<div className="form-group">
 <label>Showtimes</label>
 <input type="time" name="time" className="form-control" id="time" placeholder="Showtimes" value={newMovie.time} onChange={handleChange} required/>
</div>
</Col>
 <Col>
 <div className="form-group">
 <label>ShowDays</label>
 <input type="text" name="dates" className="form-control" id="dates" placeholder="ShowDays" value={newMovie.dates} onChange={handleChange} required/>
</div>
<div className="form-group">
 <label>Movie Banner Image</label>
 <input type="file" name="imageFile" className="form-control" id="imageFile" placeholder="Add the movie image" onChange={handlePhoto} required/>
</div>
</Col>
</Row>

<div className="footer">
<button type="submit" className="btn btn-dark btn-lg btn-block">Add Movie</button>
</div>

</form>

</div>
</div>
<div className="lines"></div>
</div>
 </>
    );
  }


export default AddMovie;

