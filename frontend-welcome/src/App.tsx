import LandingPage from '../src/pages/LandingPage/LandingPage';
import NotFound from '../src/pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
