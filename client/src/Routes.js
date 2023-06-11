// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import OptIn from './components/OptIn';
// import ThankYou from './components/ThankYou';

// const AppRoutes = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<OptIn />} />
//       <Route path="/thankyou" element={<ThankYou />} />
//     </Routes>
//   </Router>
// );

// export default AppRoutes;


import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptIn from './components/OptIn';
import ThankYou from './components/ThankYou';


const AppRoutes = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OptIn setSubmitted={setSubmitted} submitted={submitted} />} />
        <Route path="/thankyou" element={<ThankYou submitted={submitted} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
