import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
// import Navbar from "./components/Navbar";
import React, { useState } from 'react'
// import Donate from "./components/Donate";


function App() {


  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Navbar title="The Spark Foundation" mode={mode} toggleMode={toggleMode} />} /> */}
        {/* <Route path="/" element={<Donate/>}/> */}
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
