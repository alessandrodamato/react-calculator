import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Calculator from './Components/Calculator';
import Pokemon from './Components/Pokemon';
import Error404 from './Components/Error404';
// importiamo questi due elementi per il routing 
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      {/* con routes si stabilisce dove iniziano e finiscono le rotte, mentre con route configuriamo la singola rotta con path ed element */}
      <Routes>
        <Route path="/" element={<Navigate to="/calcolatrice"/>} />
        <Route path='/calcolatrice' element={<Calculator />} />
        <Route path='/contatore' element={<Counter />} />
        <Route path='/pokemon' element={<Pokemon />} />
        {/* con * tutte le rotte indefinite reindirizzeranno al componente Error404 personalizzato */}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;