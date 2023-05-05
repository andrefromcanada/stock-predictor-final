import './stockvalue.css';
import React, { useState } from 'react';

const StockValue = () => {
  const [returnOnEquity, setReturnOnEquity] = useState(null);
  const [forwardPeRatio, setForwardPeRatio] = useState(null);
  const [priceToBook, setPriceToBook] = useState(null);
  const [priceToSales, setPriceToSales] = useState(null);
  const [pegRatio, setPegRatio] = useState(null);
  const [trailingPe, setTrailingPe] = useState(null);
  const [returnOnAssets, setReturnOnAssets] = useState(null);
  const [profitMargin, setProfitMargin] = useState(null);
  const [evToEbitda, setEvToEbitda] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputTicker = event.target.elements.ticker.value;

    // Fetch the data from Alpha Vantage API
    const response = await fetch(`https://alpha-vantage.p.rapidapi.com/query?function=OVERVIEW&symbol=${inputTicker}`, {
      headers: {
        'X-RapidAPI-Key': '45dea1d620mshfec3d6082c3f2a2p103338jsn7423e05d724f',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    });

    const data = await response.json();
    console.log(data);

    // Extract the required data from the response
    const returnOnEquity = parseFloat(data.ReturnOnEquityTTM);
    const forwardPeRatio = parseFloat(data.ForwardPE);
    const priceToBook = parseFloat(data.PriceToBookRatio);
    const priceToSales = parseFloat(data.PriceToSalesRatioTTM);
    const pegRatio = parseFloat(data.PEGRatio);
    const trailingPe = parseFloat(data.TrailingPE);
    const returnOnAssets = parseFloat(data.ReturnOnAssetsTTM);
    const profitMargin = parseFloat(data.ProfitMargin);
    const evToEbitda = parseFloat(data.EVToEBITDA);
    

    // Update the state variables with the extracted data
    setReturnOnEquity(Math.round(returnOnEquity * 10000) / 100);
    setForwardPeRatio(Math.round(forwardPeRatio));
    setPriceToBook(Math.round(priceToBook));
    setPriceToSales(Math.round(priceToSales));
    setPegRatio(Math.round(pegRatio * 100) / 100);
    setTrailingPe(Math.round(trailingPe));
    setReturnOnAssets(Math.round(returnOnAssets));
    setProfitMargin(Math.round(profitMargin * 10000) / 100);
    setEvToEbitda(Math.round(evToEbitda));

  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='ticker-searcher'>
          <br/>
          <br/>

          <div className='top-line'>
            <label htmlFor="ticker">Ticker Symbol:</label>
            <input type="text" className="ticker-input" name="ticker" required />
            <button type="submit" className='submit-value-button'>SUBMIT</button>
          </div>  
          <br/>
          <br/>
          <br/>
          <br/>
            <div className='lable-house'>
              <label htmlFor="ROE-label">ROE = {returnOnEquity}%</label>
              <label htmlFor="ForwardPE-label">Forward PE = {forwardPeRatio}</label>
              <label htmlFor="PBR-label">P/B = {priceToBook}</label>
              <label htmlFor="PSR-label">P/S = {priceToSales}</label>
              <label htmlFor='PEG-label'>PEG = {pegRatio}</label>
              <label htmlFor='TrailingPE-label'>Trailing PE = {trailingPe}</label>
              <label htmlFor='returnOnAssets-label'>Return on Assets = {returnOnAssets}</label>
              <label htmlFor='profitMargin-label'>Profit Margin = {profitMargin}%</label>
              <label htmlFor='evToEbitda'>EV/EBITDA = {evToEbitda}</label>
            </div>

        </div>
      </form>
    </div>
  );
};

export default StockValue;

