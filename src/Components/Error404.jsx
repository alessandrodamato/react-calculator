import React from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  
  return (
    <div className="text-center">
      <h1 className="mt-5 mb-3">Error404</h1>
      <h2 className="mb-3">Pagina non trovata</h2>
      <button onClick={() => {navigate('/')}} className="btn btn-info">Torna alla home</button>
    </div>
  );
}

export default Error404