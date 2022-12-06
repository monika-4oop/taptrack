import React from "react";
import { Link } from "react-router-dom";
 import './FirstQuestion.css'


function Fquestion() {
    const handleClick=()=>{
        console.log("/SecondQuestion");
    }
  return (
   
    <div className="page__question-box">
      <div
        className="multi-select-button__wrapper --two-per-row  --icon "
        data-testid="multi-select-button__wrapper-loanPurpose"
      >
        <div className="multi-select-button">
          <div className="multi-select-button__title-wrapper">
            <div className="multi-select-button__title">
              What type of loan are you looking for?
            </div>
          </div>
          <div>
            <span className="question_box">
                <div className="Fbox" >
                    <Link to="/squestion">
                <div className="FQues" onClick={handleClick}>
                    <div className="img_box"><img src="	https://offers.bankrate.com/mortgages/br-branded/assets/_vertical/_flow/market.svg" alt="" /></div>
                    <div className="img_boxs">Home Purchase</div>
                </div>
                </Link>
                </div>
                <div className="Fbox">
                <Link to="/squestion">
                <div className="SQues">
                <div  className="img_box"><img src="https://offers.bankrate.com/mortgages/br-branded/assets/_vertical/_flow/money-house.svg" alt="" /></div>
                    <div className="img_boxs">Home Refinance</div>
                </div>
                </Link>
                </div>
            </span>
          </div>
       
        </div>
      </div>
      <div className="navigation-button__container">
      <Link to="/">
      <button
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

export default Fquestion;
