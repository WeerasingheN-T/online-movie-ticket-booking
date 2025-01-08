import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductionRegister, ProductionLogin, UpdateProductionTeam, ViewProduction, Movies, AddMovie, ViewMovie, ViewMovies, EditMovie, ViewTheMovie, ViewTheMovies, TicketHeader, TicketFooter } from "./ProductionTeam";

function App() {
  const [productionTeam, setLoginTeam] = useState({});

  return (
    <div className="App">
      <Router>
        <TicketHeader />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/ProductionRegister" element={<ProductionRegister />} />
          <Route path="/ProductionLogin" element={<ProductionLogin setLoginTeam={setLoginTeam} />} />
          <Route path="/UpdateProductionTeam/:email" element={<UpdateProductionTeam />} />
          <Route path="/ViewProduction/:email" element={<ViewProduction productionTeam={productionTeam} />} />
          <Route path="/AddMovie" element={<AddMovie />} />
          <Route path="/ViewMovie" element={<ViewMovie />} />
          <Route path="/ViewMovies" element={<ViewMovies />} />
          <Route path="/EditMovie/:id" element={<EditMovie />} />
          <Route path="/ViewTheMovie/:id" element={<ViewTheMovie />} />
          <Route path="/ViewTheMovies/:id" element={<ViewTheMovies />} />
        </Routes>

        <TicketFooter />
      </Router>
    </div>
  );
}

export default App;