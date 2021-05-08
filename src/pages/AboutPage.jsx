import React from "react";
import { useState, useEffect } from 'react';

const AboutPage = () => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center" style={{height:"92vh", fontSize: "1rem"}}>
      <p className="text-center" style={{fontSize: '2rem'}}>
        Welcome to the website for the study <br />
        "A Survey on Machine Learning-based Software Testing Literature: <br />
            Checking the Validity of Proposed Classification Systems"  <br />
        Please use the navigation bar above to select how you want to visualize our results
      </p>
    </div>
  );
};

export default AboutPage;