import { useState } from "react";
import axios from "axios";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import './technicalanalysis.css';




const TechnicalAnalysis = () => {
const [ticker, setTicker] = useState("");
const [error, setError] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [showCharts, setShowCharts] = useState(false);




const handleFormSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);
  setShowCharts(false);




  try {
    const response = await axios.get(
      `https://alpha-vantage.p.rapidapi.com/query?function=MACD&symbol=${ticker}&interval=daily&time_period=10&series_type=open`,
      {
        headers: {
          "X-RapidAPI-Key": "45dea1d620mshfec3d6082c3f2a2p103338jsn7423e05d724f",
          "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        },
      }
    );




    if (response.data["Technical Analysis: MACD"]) {
      setIsLoading(false);
      setShowCharts(true);
    }
  } catch (error) {
    setIsLoading(false);
    setError("Failed to load data. Please try again.");
    console.error(error);
  }
};




const handleInputChange = (e) => {
  setTicker(e.target.value.toUpperCase());
};




return (
  <div className="container">
    <br/>
    <br/>
    <h1 className="text-center my-4">Stock Technical Indicators</h1>
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="ticker">Stock Ticker:</label>
        <input
          type="text"
          className="form-control"
          id="ticker"
          placeholder=""
          value={ticker}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="technical-indicator-button">
        {isLoading ? (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        ) : (
          "Get Technical Indicators"
        )}
      </button>
    </form>
    {error && <p className="text-danger my-3">{error}</p>}
    {showCharts && (
      <div className="stocks_widget">
         <br/>
         <br/>
         <br/>
         <br/>
        <TradingViewWidget
          symbol={ticker}
          theme={Themes.DARK}
          interval="D"
          studies={["RSI@tv-basicstudies"]}
          autosize={false}
        />
         <br/>
         <br/>
         <br/>
         <br/>
        <TradingViewWidget
          symbol={ticker}
          theme={Themes.DARK}
          interval="D"
          studies={["MACD@tv-basicstudies"]}
          autosize={false}
        />
        <br/>
         <br/>
         <br/>
         <br/>
        <TradingViewWidget
          symbol={ticker}
          theme={Themes.DARK}
          interval="D"
          studies={["MA50@tv-basicstudies"]}
          autosize={false}
         />
         <br/>
         <br/>
         <br/>
         <br/>
     </div>
    )}
  </div>
);
};




export default TechnicalAnalysis;
