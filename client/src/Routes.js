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


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import OptIn from './components/OptIn';
import ThankYou from './components/ThankYou';

const OptInWithRef = (props) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const speakerRef = params.get('ref');

  return <OptIn speakerRef={speakerRef} {...props} />;
};

const AppRoutes = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const formFilled = localStorage.getItem('formFilled');
    if (formFilled) {
        setSubmitted(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OptIn setSubmitted={setSubmitted} submitted={submitted} />} />
        <Route path="/optin" element={<OptInWithRef setSubmitted={setSubmitted} submitted={submitted} />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

