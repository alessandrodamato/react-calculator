import React from "react";
// importiamo l'hook useNavigate()
import { useNavigate } from "react-router-dom";

function Error404() {
  // lo salviamo in una variabile per poterla poi utilizzare
  const navigate = useNavigate();
  
  return (
    <div className="text-center">
      <h1 className="mt-5 mb-3">Error404</h1>
      <h2 className="mb-3">Pagina non trovata</h2>
      {/* abbiamo anche un altro modo per navigare tra le rotte senza avere un tag a/link */}
      <button onClick={() => {navigate('/')}} className="btn btn-info">Torna alla home</button>
    </div>
  );
}

export default Error404