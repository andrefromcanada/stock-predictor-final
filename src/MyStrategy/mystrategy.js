import React from 'react';
import './mystrategy.css';
import ExcelPic from './ExcelPic.png';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const MyStrategy = () => {
  const handleDownload = async () => {
    const zip = new JSZip();
    const folder = zip.folder("Findings");

    // Loop through the files in the Findings directory
    const req = require.context('../Findings', false, /\.(xlsx|xls|doc|docx|pdf)$/);
    req.keys().forEach((filename) => {
      const fileContent = req(filename);
      const parts = filename.split('/');
      const fileName = parts[parts.length - 1];
      folder.file(fileName, fileContent);
    });

    // Generate the zip file and download it
    const content = await zip.generateAsync({type:"blob"});
    saveAs(content, "Findings.zip");
  }

  return (
    <div className="home_container">
      <br/>

      <h1>My Findings</h1>
      <p>
        Since I began learning programming, I have been analyzing the last three earnings reports of each of the 30 Dow stocks in an effort to identify patterns. 
        After scrutinizing numerous stock technical indicators and valuation metrics, I have determined that the PEG ratio is the most effective indicator for determining whether an earnings report will positively impact a stock's value. 
        In order to fully comprehend why the PEG ratio is superior, it is necessary to examine why other ratios failed to yield reliable results.
      </p>
        To begin with, technical indicators proved ineffective as earnings reports often serve as catalyst events that establish trends rather than follow them. 
        For instance, a stock can experience months of momentum only to suffer a sharp decline due to a negative earnings report that is revealed on the day of the report. 
      <p>
        Furthermore, over the past few quarters, I have observed that many valuation metrics, such as the PE ratio, have proven to be flawed predictors of earnings calls. 
        Companies can artificially lower their earnings in order to reduce their tax liability, which can skew their P/E ratio. 
        This can be seen in companies that report high free cash flow but low net income. 
      </p>
        Similarly, the P/B ratio can be unreliable, 
        as some companies with asset-light business models may appear to be more expensive than they actually are. 
        This is because asset-light models require less capital and should, in reality, be more valuable.
      <p>
        Turning to the PEG ratio and my findings, price-to-growth is a raw metric used throughout the industry to gauge a company's performance relative to its growth. 
        I have determined that stocks with a PEG ratio of 4 or higher have only a 44% chance of success, while companies with a PEG ratio of less than 2 have a 55% chance of success in achieving positive performance on earnings day. 
        This 11% disparity is not coincidental, as the data indicates that as the PEG ratio increases, the chances of success decrease.
      </p>
      <br/>

      <button className='mystrategy-button' onClick={handleDownload}>Download Findings</button>
    </div>
  );
};

export default MyStrategy;
