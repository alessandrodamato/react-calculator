import './App.css';
import Header from './Components/Header';
import Calculator from './Components/Calculator';
import Error404 from './Components/Error404';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/calcolatrice"/>} />
        <Route path='/calcolatrice' element={<Calculator />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;