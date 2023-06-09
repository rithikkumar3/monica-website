import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OptIn from "./components/OptIn";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/" element={<OptIn />} />
      </Routes>
    </Router>
  );
};

export default App;
