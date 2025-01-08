import React,{useState,useEffect,useCallback} from 'react';
import './PRegister.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function UpdateProductionTeam() {

    const {email}=useParams("");
    const [updateTeam,setupdateTeam]=useState({
      _id:'',
      firstName:'',
      lastName:'',
      MemberId:'',
      email:'',
      password:'',
      ConfirmPassword:'',
  });
  
  const setTeam=(e)=>{
    console.log(e.target.value);
    const {name,value}=e.target;
    setupdateTeam((preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
  }
  
  const getTeam = useCallback(() => {
    
    const res=fetch(`http://localhost:8073/team/get/${email}`,{
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
      setupdateTeam(res1[1]);
      console.log(res1[1]);
    }
  }, [email]);
  
  useEffect(()=>{
  
    getTeam();
  },[getTeam]);
  
  const updateTeams=async(e)=>{

    e.preventDefault();
  
    const {_id,firstName,lastName,MemberId,email,password}=updateTeam;
  
    const res2=await fetch(`http://localhost:8073/team/update/${_id}`,{
  
      method:"PUT",
      headers:{
      "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstName,lastName,MemberId,email,password
      })
    });
  
    const data2=await res2.json();
    console.log(data2);
  
    if(res2.status===500||!data2){
      alert("Fill the data");
    }
  
    else{
      alert("Production Team Member is updated");
    }
 }
   
return (
 <>

<div className="base-container">
<div className="image1">
   
 <div className="containerblock">
<form onSubmit={updateTeams} encType="multipart/form-data">
<p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Update Details</p>

<Row>
  <Col>
<div className="form-group">
 <label>Id</label>
 <input type="text" name="_id" className="form-control" id="_id" placeholder="First Name" value={updateTeam._id} required/>
 </div>
</Col>
<Col>
 </Col>
</Row>

<Row>
  <Col>
<div className="form-group">
 <label>First Name</label>
 <input type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" onChange={setTeam} value={updateTeam.firstName} required/>
 </div>
</Col>
<Col>
<div className="form-group">
 <label>Last Name</label>
 <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Last name" onChange={setTeam} value={updateTeam.lastName} required/>
 </div>
 </Col>
</Row>

<Row>
  <Col>
<div className="form-group">
 <label>Production Team Member Id</label>
 <input type="text" name="MemberId" className="form-control" id="MemberId" placeholder="Enter member id" onChange={setTeam} value={updateTeam.MemberId} required/>
</div>
</Col>
<Col>
<div className="form-group">
 <label>Email</label>
 <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" onChange={setTeam} pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={updateTeam.email} required/>
</div>
</Col>

</Row>

<Row>
<Col>
<div className="form-group">
 <label>Password</label>
 <input type="password" name="password" className="form-control" id="password" placeholder="Enter password" onChange={setTeam} required/>
</div>
</Col>
 <Col>
<div className="form-group">
 <label>Confirm Password</label>
 <input type="password" name="ConfirmPassword" className="form-control" id="ConfirmPassword" placeholder="Enter to confirm password" required />
</div>
</Col>
</Row>


<Row>
  
<div className="form-group">
 <input type="checkbox" name="checks" className="ck-control" required/>I agree to Terms and Conditions of this ticket booking system.
</div>

</Row>


<div className="footer">
<button type="submit" className="btn btn-dark btn-lg btn-block">Update</button>
<p></p>
<p></p> 

  </div>
</form>
</div>
</div>
<div className="lines"></div>
</div>
 </>
    );
  }


export default UpdateProductionTeam;