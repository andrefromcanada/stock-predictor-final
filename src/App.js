import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home/home';
import TechnicalAnalysis from './TechnicalAnalysis/technicalanalysis';
import StockValue from './StockValue/stockvalue';
import OptionPrice from './OptionPrice/optionprice';
import RecordBet from './RecordBet/recordbet';
import MyStrategy from './MyStrategy/mystrategy';
import './App.css';


const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: black;
  gap: 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  

  &:hover {
    color: #666;
  }
`;

const App = () => {
  return (
    <Router>
      <div className='header-toggle'>
      <h1>EARNINGS PREDICTOR</h1> 
      </div>

      <Nav className='navbar-container'>

          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/stock-value">Stock Value</StyledLink>
          <StyledLink to="/technical-analysis">Technical Analysis</StyledLink>
          <StyledLink to="/option-price">Option Price</StyledLink>
          <StyledLink to="/record-bet">Record Bet</StyledLink>
          <StyledLink to="/my-strategy">My Findings</StyledLink>


      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock-value" element={<StockValue />} />
        <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
        <Route path="/option-price" element={<OptionPrice />} />
        <Route path="/record-bet" element={<RecordBet />} />
        <Route path="/my-strategy" element={<MyStrategy />} />
      </Routes>
    </Router>
  );
};

export default App;