import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">


        <h1>Instructions</h1>
        <p>
        Please refer to the instructions below for guidance on identifying patterns 
        in the prediction of earnings calls for stocks that may be applicable to 
        your research or analysis. The list nicely follows along the navigation bar 
        to lead you to your next prediction
        </p>

      
      <div className="instructions-container">
      <ol>
          <li>Select the "Stock Value" tab to access a variety of valuation metrics for any stock.</li>
        <br />
          <li>Navigate to the "Technical Analysis" tab and enter the stock ticker to discover the three major technical indicators and determine their potential impact on an earnings call.</li>
        <br />
          <li>Select the "Option Price" tab and record the option prices to ensure your breakeven price is reasonable.</li>
        <br />
          <li>Visit the "Record Bet" tab to hold yourself accountable to your investment theories by emailing a friend. Even if you are wrong, this creates a healthy habit of improvement.</li>
        <br />
          <li>Explore the "My Findings" tab to discover a unique pattern I uncovered in earnings calls over the past few months.</li>
      </ol> 
      </div>
    </div>
  );
};

export default Home;
