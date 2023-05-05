import React, { useState } from 'react';
import './optionprice.css';


function OptionPrice() {
  const [stockPrice, setStockPrice] = useState('');
  const [strikePrice, setStrikePrice] = useState('');
  const [optionPremium, setOptionPremium] = useState('');
  const [breakevenPrice, setBreakevenPrice] = useState('');
  const [percentBreakeven, setPercentBreakeven] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the break-even price
    const breakevenPrice = parseFloat(strikePrice) + parseFloat(optionPremium);
    setBreakevenPrice(breakevenPrice);

    const percentBreakeven = ((parseFloat(strikePrice) + parseFloat(optionPremium) - parseFloat(strikePrice)) / parseFloat(strikePrice) * 100).toFixed(2);
      setPercentBreakeven(`${percentBreakeven}%`);




  };

  return (
    <div className='optionprice-container'>
      <br/>
      <br/>
   
      <h1>Long Call Option Profit/Loss Calculator</h1>
      <div className='optionprice-form-container'>
        <form onSubmit={handleSubmit}>
          <div className='label-option-container'>
            <label>
              Stock Price:
              <input type="number" value={stockPrice} onChange={(e) => setStockPrice(e.target.value)} />
            </label>
            <br />
            <label>
              Strike Price:
              <input type="number" value={strikePrice} onChange={(e) => setStrikePrice(e.target.value)} />
            </label>
            <br />
            <label>
              Option Premium:
              <input type="number" value={optionPremium} onChange={(e) => setOptionPremium(e.target.value)} />
            </label>
            <br />
            <button className='option-button'type="submit">Calculate</button>
          </div>
        </form>
        <h2>Results:</h2>
        <p>Break-even Price: {breakevenPrice}</p>
        <p>Percent Increase to break even: {percentBreakeven}</p>
      </div>

      <br />


    </div>
  );
}

export default OptionPrice;
