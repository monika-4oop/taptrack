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
            What type of property are you purchasing?
            </div>
          </div>
          <div>
          <span className="question_box">
            <div>
                <div className="Fbox">
                <Link to="/thirdquestion">

                <div className="FQues">
                    <div className="img_box"><img src="	https://offers.bankrate.com/mortgages/br-branded/assets/_vertical/_flow/market.svg" alt="" /></div>
                    <div className="img_box">Town Home</div>
                </div>
                </Link>
                </div>
                <div className="Fbox">
                <Link to="/thirdquestion">
                <div className="SQues">
                <div  className="img_box"><img src="	https://offers.bankrate.com/mortgages/br-branded/assets/_vertical/_flow/money-house.svg" alt="" /></div>
                    <div className="img_box" >Home Refinance</div>
                </div>
                </Link>
                </div>
                </div>

                <div>
                <div className="Fbox">
                <Link to="/thirdquestion">
                <div className="FQues">
                    <div className="img_box"><img src="	https://offers.bankrate.com/mortgages/br-branded/assets/_vertical/_flow/market.svg" alt="" /></div>
                    <div className="img_box">Home Purchase</div>
                </div>
                </Link>
                </div>
                <div className="Fbox">
                <Link to="/thirdquestion">
                <div className="SQues">
                <div  className="img_box"><img src="	https://offers.bankrate.com/mortgages/br-branded/assets/_vertical/_flow/money-house.svg" alt="" /></div>
                    <div className="img_box" >Home Refinance</div>
                </div>
                </Link>
                </div>
                </div>
            </span>
          </div>
         
        </div>
      </div>
      <div className="navigation-button__container">
       <a href="#"><button
          className="button --back "
          data-testid="back-button"
          type="button"
          
        >
          Back
        </button>
        </a>
      </div>
    </div>
   
  );
}

export default Squestion;
