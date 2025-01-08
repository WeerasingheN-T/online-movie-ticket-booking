import React,{useState} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductionRegister,ProductionLogin,UpdateProductionTeam,ViewProduction,Movies,AddMovie,ViewMovie,ViewMovies,EditMovie,ViewTheMovie,ViewTheMovies,TicketHeader,TicketFooter} from "./ProductionTeam";

function App() {

  const [productionTeam,setLoginTeam] = useState({});

  return (
    <div className="App">
      <Router> 
        <TicketHeader/>
    
        <Switch>
        <Route path="/" exact component={() => <Movies/>} />  
        <Route path="/ProductionRegister" exact component={() => <ProductionRegister/>} />
        <Route path="/ProductionLogin"><ProductionLogin setLoginTeam={setLoginTeam}/></Route>
        <Route path="/UpdateProductionTeam/:email" exact component={() => <UpdateProductionTeam/>} />
        <Route path="/ViewProduction/:email"><ViewProduction productionTeam={productionTeam} /></Route>
        <Route path="/AddMovie" exact component={() => <AddMovie/>} />
        <Route path="/ViewMovie" exact component={() => <ViewMovie/>} />
        <Route path="/ViewMovies" exact component={() => <ViewMovies/>} />
        <Route path="/EditMovie/:id" exact component={() => <EditMovie/>} />
        <Route path="/ViewTheMovie/:id" exact component={() => <ViewTheMovie/>} />
        <Route path="/ViewTheMovies/:id" exact component={() => <ViewTheMovies/>} />
          </Switch>
          <TicketFooter/>
          </Router>
    </div>
  );
}

export default App;