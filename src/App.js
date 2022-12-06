import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import FirstQuestion from './Components/Questions/FirstQuestion';
 import Squestion from './Components/BelowQuestions/SecondQuestion';
 import ThirdQuestion from './Components/BelowQuestions/ThirdQuestion';
 import { Route, Routes } from "react-router-dom";
import FourthQuestion from "./Components/BelowQuestions/FourthQuestion";
 import { Home } from "./Routes/Home";
 import {SecondQuestion} from "./Routes/SecondQuestion";
function App() {
  return (
  // <>
  //     <Navbar />
  //     <FirstQuestion/>
  //     <Squestion/>
  //     <ThirdQuestion/>
  //     <FourthQuestion/>
  //     </>
      
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="squestion" element={<Squestion />} />
    <Route path="thirdquestion" element={<ThirdQuestion />} />
    <Route path="fourthQuestion" element={<FourthQuestion />} />
    
  </Routes>
</>
    

  );
}

export default App;
