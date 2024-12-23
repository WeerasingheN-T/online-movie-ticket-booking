import React from 'react';
import './Movies.css';
import Mov1 from '../ProductionTeamTools/fi1.jpg';
import Mov2 from '../ProductionTeamTools/fi2.jpeg';
import Mov3 from '../ProductionTeamTools/fi5.jpg';
import Mov4 from '../ProductionTeamTools/fi4.jpg';
import Mov5 from '../ProductionTeamTools/fi12.jpg';
import Mov6 from '../ProductionTeamTools/fi9.jpg';
import Mov7 from '../ProductionTeamTools/fi7.jpg';
import Mov8 from '../ProductionTeamTools/fi3.jpg';
import Mov9 from '../ProductionTeamTools/fi6.jpg';
import Mov14 from '../ProductionTeamTools/fi13.jpg';
import Mov16 from '../ProductionTeamTools/fi14.jpg';
import Mov17 from '../ProductionTeamTools/fi11.jpg';
import Mov18 from '../ProductionTeamTools/fi8.jpg';
import Mov19 from '../ProductionTeamTools/batmn.jpg';
import Mov20 from '../ProductionTeamTools/fi16.jpg';

function Movies() {

return (
  <>
<div className="alld">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active">
<img src={Mov1} className="d-block" />
</div>
<div className="carousel-item">
<img src={Mov2} className="d-block " />
</div>
<div className="carousel-item">
<img src={Mov3} className="d-block " />
</div>
<div className="carousel-item">
<img src={Mov4} className="d-block " />
</div>
<div className="carousel-item">
<img src={Mov5} className="d-block " />
</div>
<div className="carousel-item">
<img src={Mov6} className="d-block " />
</div>
<div className="carousel-item">
<img src={Mov7} className="d-block " />
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>
<br/><br/>

<div className="cardtext">
    <h4>New Arrival Movies</h4>
</div>

<div className="card-group m-2">
  <div className="card">
    <img src={Mov8} />
    <div className="card-body">
      <h2 className="card-title">SCREAM</h2>
      <p className="card-text">Directed by Radio Slience.Movie is showed from March 22 at Cinema Halls.</p>
      <a href='./ViewTheMovies/627a693f06d5fe038319f62e' className="btn btn-secondary">View Movie</a>
    </div>
  </div>
  <div className="card">
    <img src={Mov9} />
    <div className="card-body">
      <h2 className="card-title">SHANG-CHI</h2>
      <p class="card-text">Directed by Destin Daniel Cretton.Movie is showed from March 20 at Cinema Halls.</p>
      <a href='./ViewTheMovies/627b4f6e94ce09588ea8cd93' className="btn btn-secondary">View Movie</a>
    </div>
  </div>
  <div className="card">
    <img src={Mov20} />
    <div className="card-body">
      <h2 className="card-title">SEYRAA</h2>
      <p className="card-text">Directed by Surender Rebby.Movie is showed from March 23 at Cinema Halls.</p>
      <a href='' className="btn btn-secondary">View Movie</a>
    </div>
   </div>
    <div className="card">
    <img src={Mov14} />
    <div className="card-body">
      <h2 className="card-title">NIGHT of the SICARIO</h2>
      <p className="card-text">Directed by Joth Riggs.Movie is showed from March 20 at Cinema Halls.</p>
      <a href='./ViewTheMovies/627e3a8fffcf1e829a999f7e' className="btn btn-secondary">View Movie</a>
    </div>
   </div>
  </div>
  <div className="card-group m-2">
    <div className="card">
    <img src={Mov19} />
    <div className="card-body">
      <h2 className="card-title">THE BATMAN</h2>
      <p className="card-text">Directed by Matt Reeves.Movie is showed from March 4 at Cinema Halls.</p>
      <a href='./ViewTheMovies/6277d9f7ff2bdf880de65e6a' className="btn btn-secondary">View Movie</a>
    </div>
   </div>
    <div className="card">
    <img src={Mov16} />
    <div className="card-body">
      <h2 className="card-title">FANTASTIC 4</h2>
      <p className="card-text">Created by Jack Kirby.Movie is showed from March 8 at Cinema Halls.</p>
      <a href='./ViewTheMovies/627b4fbf94ce09588ea8cd97' className="btn btn-secondary">View Movie</a>
    </div>
   </div>
    <div className="card">
    <img src={Mov17} />
    <div className="card-body">
      <h2 className="card-title">Mountains</h2>
      <p className="card-text">This is a photo of snowy-covered mountains. How majestic.</p>
      <a href='./ViewTheMovies/627e3b30ffcf1e829a999f82' className="btn btn-secondary">View Movie</a>
      </div>
     </div>
      <div className="card">
    <img src={Mov18} />
    <div className="card-body">
      <h2 className="card-title">REMINISCENCE</h2>
      <p className="card-text">Directed by Lisa Joy.Movie is showed from March 4 at Cinema Halls.</p>
      <a href="#" className="btn btn-secondary">View Movie</a>
    </div>
   </div>
    </div>
  </div>
 </>
    );
  }


export default Movies;