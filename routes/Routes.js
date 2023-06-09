import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptIn from '../client/src/components/OptIn';
import ThankYou from '../client/src/components/ThankYou';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<OptIn />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  </Router>
);

export default AppRoutes;
