import React, { useState, useEffect } from 'react';
import './AddMovie.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import AddFi from '../ProductionTeamTools/AddFi.png';
import EditFi from '../ProductionTeamTools/EditFi1.png';
import viewFi from '../ProductionTeamTools/viewFi1.jpg';

function ViewTheMovie() {

  const { email } = useParams("");
  const [teamList, setTeamlist] = useState([]);

  var array;
  var res;
  var res1;

  const histoy = useNavigate();

  useEffect(() => {

    function getTeams() {
      axios.get(`http://localhost:8073/team/get/${email}`).then((res) => {
        setTeamlist(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getTeams();

  }, [email]);

  const deleteMovie = async (_id) => {
    const res2 = await fetch(`http://localhost:8073/team/delete/${_id}`, {

      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deleteData = await res2.json();
    console.log(deleteData);

    if (res2.status === 500 || deleteData) {
      console.log("error");
    }

    else {
      alert("Account deleted");
      histoy.push("/");
    }
  }

  var viewItems_HTMLTABLE = "";

  if (!Array.isArray(teamList)) {

    array = Object.entries(teamList);
    res = Object.values(array);
    res1 = Object.values(res[1]);
    console.log(res1[1]);

    viewItems_HTMLTABLE =
      res1.map((data) => {

        if (typeof (data.imageFiles) !== 'undefined') {


          return (

            <div key={data._id} className="card4 m-2" >

              <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">Production Team Member {data.firstName}'s Account</p>

              <br />

              <div className="col-md-8">
                <Row>
                  <Col><img className="rounded-circle" width="200" height="200" src={require(`../Photos/${data.imageFiles}`)} alt='image4' /></Col>
                  <Col>
                    <Row>
                      <Col> <p className="text-center h2 fw-bold mb-3 mx-1 mx-md-3 mt-6">{data.firstName}&emsp;{data.lastName}</p></Col>
                    </Row>
                  </Col>
                </Row>

              </div>
              <div className="card-body">
                <div className="col-md-8">

                  <Row>
                    <Col ><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-6">Member Id:</p></Col>
                    <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-6">{data.MemberId}</p></Col>
                  </Row>
                  <Row className="row-md-8">
                    <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">Email:</p></Col>
                    <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.email}</p></Col>
                  </Row>
                  <Row className="row-md-8">
                    <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">User Name:</p></Col>
                    <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.email}</p></Col>
                  </Row>
                </div>
              </div>
              <div className="light">
                <a href={`/UpdateProductionTeam/${data.email}`}><button className="btn btn-dark btn-lg btn-block">Update Details</button></a>
                <button className="btn btn-dark btn-lg btn-block" onClick={() => deleteMovie(data._id)}>Delete Account</button>
              </div>
            </div>

          );
        }
        return null;
      });

  }

  else
    viewItems_HTMLTABLE = "loading"



  return (
    <>

      <div className="addl2">


        {viewItems_HTMLTABLE}


        <div className="light1">

          <div className="card-group m-2">
            <div className="card">
              <center><img width="200" height="200" src={AddFi} alt='image5' /></center>
              <div className="card-body">
                <h2 className="card-title">Add Movies</h2>
                <p className="card-text">Add new showing movies under the different theaters into the movie collections.</p>
                <a href="/AddMovie" className="btn btn-secondary">Add Movies</a>
              </div>
            </div>
            <div className="card">
              <center><img width="200" height="200" src={viewFi} alt='image6' /></center>
              <div className="card-body">
                <h2 className="card-title">View Movies</h2>
                <p className="card-text">There are the showing movies under different theaters</p>
                <a href="/ViewMovie" className="btn btn-secondary">View Movies</a>
              </div>
            </div>
            <div className="card">
              <center><img width="300" height="240" src={EditFi} alt='image7' /></center>
              <div className="card-body">
                <h2 className="card-title">View Theaters</h2>
                <p className="card-text">There are the registered theaters and their details.</p>
                <a href="/ViewMovie" className="btn btn-secondary">View Theaters</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );

}

export default ViewTheMovie;