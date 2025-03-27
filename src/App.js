import './App.css';
import Header from './Components/Header';
import Calculator from './Components/Calculator';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<Navigate to="/calcolatrice" />} />
        <Route path='/calcolatrice' element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;