import { Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage/LandingPage';
import NotFound from '../src/pages/NotFound/NotFound';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
