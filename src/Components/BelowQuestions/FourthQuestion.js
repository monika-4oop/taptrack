import React from "react";
 import '../Questions/FirstQuestion.css'
 import { Link } from "react-router-dom";


function Squestion() {
  return (
   
    <div className="page__question-box">
      <div
        className="multi-select-button__wrapper --two-per-row  --icon "
        data-testid="multi-select-button__wrapper-loanPurpose"
      >
        <div className="multi-select-button">
          <div className="multi-select-button__title-wrapper">
            <div className="multi-select-button__title">
            What is your estimated property value?            </div>
          </div>
          <div>
          <span className="question_box">
           
               
                
                <div className="input_div">
                    <input type="text" placeholder="$4000"/>
                </div>
               
     
      
      
            </span>
            <div className="buble"> 
      <div className="slider-parent">
      <input type="range" min="1" max="500" className="slider"
        
      />
      </div>
      </div>
          </div>
         
        </div>
      </div>
      <div className="navigation-button__containers">
      <Link to="/squestion"><button
          className="button --back "
          data-testid="back-button"
          type="button"
          
        >
          continue
        </button>
        </Link>
      </div>
      <div className="navigation-button__container">
      <Link to="/squestion"><button
          className="button --back "
          data-testid="back-button"
          type="button"
          
        >
          Back
        </button>
        </Link>
      </div>
    </div>
   
  );
}

export default Squestion;
