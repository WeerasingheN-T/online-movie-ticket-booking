import React, { useState, useEffect } from 'react';
import './AddMovie.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ViewTheMovie() {

  const { id } = useParams("");
  const [movieList, setMovielist] = useState([]);

  var arr;
  var res;
  var res1;

  useEffect(() => {

    function getMovies() {
      axios.get(`http://localhost:8073/movie/get/${id}`).then((res) => {
        setMovielist(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getMovies();

  }, [id]);

  var viewItems_HTMLTABLE = "";

  if (!Array.isArray(movieList)) {

    arr = Object.entries(movieList);
    res = Object.values(arr);
    res1 = Object.values(res[1]);
    console.log(res1[1]);

    viewItems_HTMLTABLE =
      res1.map((data) => {

        if (typeof (data.imageFile) !== 'undefined') {


          return (
            <div key={data._id} className="card4 m-2" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img width="342" height="460" src={require(`../Photo/${data.imageFile}`)} alt='image8' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="text-center fw-bold mb-8 mx-1 mx-md-2 mt-1">{data.MovieName}</h5>

                    <br /><br />

                    <Row className="row-md-8">
                      <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-6">Movie Id:</p></Col>
                      <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-6">{data._id}</p></Col>
                    </Row>
                    <Row className="row-md-8">
                      <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">Relesed Date:</p></Col>
                      <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.date}</p></Col>
                    </Row>
                    <Row className="row-md-8">
                      <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">Movie Description:</p></Col>
                      <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.description}</p></Col>
                    </Row>
                    <Row className="row-md-8">
                      <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">Cast:</p></Col>
                      <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.cast}</p></Col>
                    </Row>
                    <Row className="row-md-8">
                      <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">Theater:</p></Col>
                      <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.theater}</p></Col>
                    </Row>
                    <Row className="row-md-8">
                      <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">Show Days</p></Col>
                      <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.dates}</p></Col>
                    </Row>
                    <Row className="row-md-8">
                      <Col><p className="text-center h12 fw-bold mb-3 mx-1 mx-md-3 mt-2">Show Time</p></Col>
                      <Col><p className="text-center h12 mb-3 mx-1 mx-md-3 mt-2">{data.time}</p></Col>
                    </Row>
                  </div>
                </div>
              </div>

              <div className="light">
                <a href={`/EditMovie/${data._id}`}><button className="btn btn-dark btn-lg btn-block">Update Movie</button></a>
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

      <div className="images4">


        {viewItems_HTMLTABLE}



      </div>
    </>
  );

}

export default ViewTheMovie;