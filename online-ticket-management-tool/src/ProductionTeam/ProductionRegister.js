import React,{useState} from 'react';
import './PRegister.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Row,Col} from 'react-bootstrap';

const ProductionRegister=()=> {

  const [newTeam,setNewTeam]=useState(
    {
  firstName:'',
  lastName:'',
  MemberId:'',
  email:'',
  password:'',
  ConfirmPassword:'',
  imageFiles:'',
  checks:'',
    }
  );

  

  const sendTeamMember=(e)=>{

    if(newTeam.password!=newTeam.ConfirmPassword){
    alert("Password and confirm password are not equal")
  }

  else{
    e.preventDefault();
    const data =new FormData();
    data.append('firstName',newTeam.firstName);
    data.append('lastName',newTeam.lastName);
    data.append('MemberId',newTeam.MemberId);
    data.append('email',newTeam.email);
    data.append('password',newTeam.password);
    data.append('imageFiles',newTeam.imageFiles);
    
    axios.post("http://localhost:8073/team/add", data).then(()=>{

      alert("Production team member is added");
      }).catch((err)=>{
        alert(err);
      })
    }
  }

    const handleChange = (e) => {
      setNewTeam({...newTeam, [e.target.name]: e.target.value});
   }

  const handlePhoto = (e) => {
      setNewTeam({...newTeam, imageFiles: e.target.files[0]});
   } 

return (
 <>

<div className="base-container">
<div className="image1">
   
 <div className="containerblock">
<form onSubmit={sendTeamMember} encType="multipart/form-data">
<p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign up</p>

<Row>
  <Col>
<div className="form-group">
 <label>First Name</label>
 <input type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" value={newTeam.firstName} onChange={handleChange} required/>
 </div>
</Col>
<Col>
<div className="form-group">
 <label>Last Name</label>
 <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Last name" value={newTeam.lastName} onChange={handleChange} required/>
 </div>
 </Col>
</Row>

<Row>
  <Col>
<div className="form-group">
 <label>Production Team Member Id</label>
 <input type="text" name="MemberId" className="form-control" id="MemberId" placeholder="Enter member id" value={newTeam.MemberId} onChange={handleChange} required/>
</div>
</Col>
<Col>
<div className="form-group">
 <label>Email</label>
 <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={newTeam.email} onChange={handleChange} required/> 
                       
</div>
</Col>

</Row>

<Row>
<Col>
<div className="form-group">
 <label>Password</label>
 <input type="password" name="password" className="form-control" id="password" placeholder="Enter password" value={newTeam.password} onChange={handleChange} required/>
</div>
</Col>
 <Col>
<div className="form-group">
 <label>Confirm Password</label>
 <input type="password" name="ConfirmPassword" className="form-control" id="ConfirmPassword" placeholder="Enter to confirm password" onChange={handleChange} required/>
</div>
</Col>
</Row>

<Row>
<Col>
<div className="form-group">
<label>Profile Photo</label>
 <input type="file" name="imageFiles" className="form-control" id="imageFiles" placeholder="Add the profile photo" onChange={handlePhoto} required/>
</div>
</Col> 
<Col></Col>
</Row>


<Row>
  
<div>
 <input type="checkbox" name="checks" className="ck-control" onChange={handleChange} required/>I agree to Terms and Conditions of this ticket booking system.
</div>

</Row>


<div className="footer">
<button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
    <p className="forgot-password text-right">
    Already registered <a href="/ProductionLogin">log in?</a>
    </p>
    </div>
</form>
</div>
</div>
<div className="lines"></div>
</div>
 </>
    );
  }


export default ProductionRegister;