import './App.css';
import Header from './Components/Header';
import Calculator from './Components/Calculator';
import PrivacyPolicy from './Components/PrivacyPolicy';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='*' element={<Navigate to="/calcolatrice" />} />
        <Route path='/calcolatrice' element={<Calculator />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;