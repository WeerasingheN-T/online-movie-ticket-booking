import React,{useState} from 'react'
import './ProductionLogin.css';
import axios from 'axios';
import {useHistory,Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import viewFi from '../ProductionTeamTools/EFi1.jpg';

function ProductionLogin ({setLoginTeam}) {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

    const history = useHistory();
  
    function login (e) {

        e.preventDefault();
        const production={email,password};
        axios.post("http://localhost:8073/team/login",production).then(res=>{
        alert("Login succes");
        setLoginTeam(res.data.user);

        if(res.status===200){
         history.push(`/ViewProduction/${email}`);
         return <Redirect to={`/ViewProduction/${email}`} /> 
        }

      }).catch((err)=>{
        alert(err.message);
      })
      
}

    return (
        <>
   <div className="alld1">
    <div className="card-container">
     
     <div className="container mt-5 mb-5">
       <div className="d-flex flex row g-0">
        <div className="col-md-5 mt-8">
           
            <div className="card card1 p-3">
              
                <div className="d-flex flex-column">             
                <img src="https://i.imgur.com/kFFNY1q.png" height="50" width="50" alt='Login1' />
                <span className="login mt-3">Log in</span> </div>
            <form onSubmit={login}>

                <div className="input-field d-flex flex-column mt-2"> 

                <label><span>Email</span></label> 
                <input type="text" className="form-control" name="email" placeholder="email@example.com" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/> 

                <label className="mt-3"><span>Password</span></label> 
                <input type="password" className="form-control" name="password" placeholder="Enter Your Password" id="passwrod" value={password} onChange={(e)=>setPassword(e.target.value)} required/> 

                <input type="submit" className="mt-4 btn1 btn-dark d-flex justify-content-center align-items-center" value="Login" />
                    <div className="mt-3 text1"> 
                    <div className="text2 mt-4 d-flex flex-row align-items-center"> <span>Don't have an account?<a href='./ProductionRegister'><span className="register">Register here</span></a></span> </div>
                </div>
               </div>
             </form>
            </div> 
        </div>
        <div className="col-md-5 mt-8">
            <div className="card card2 p-3">
                <div className="image">
                    <img width="400" height="440" src={viewFi} alt='card1'/>
                </div>
                 </div>
        </div>
      </div>
     </div>    
   </div>
  </div>
        </>
    );
}
export default ProductionLogin;