import React from "react";
import './Pokemon.css';
import axios from "axios";
import { useState, useEffect } from "react";

function Pokemon() {

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  const [value, setvalue] = useState(1);
  const [pokemon, setpokemon] = useState({});
  const [pokemons, setpokemons] = useState([]);

  useEffect(() => {
    getApi();
    getAllPokemons();
  }, [value]);

  function getApi() {
    setpokemon({});
    axios.get(apiUrl + value)
         .then(res => {
          setpokemon(res.data);
         })
         .catch(err => {
          console.log(err.message);
         })
  };

  function getAllPokemons() {
    axios.get(apiUrl)
         .then(res => {
          setpokemons(res.data.results);
         })
         .catch(err => {
          console.log(err.message);
         })
  };

  return (
    <div className="container text-center">
      {pokemon.name && <h1 className="my-5 text-capitalize">Pokemon: {pokemon.name}</h1>}
      {!pokemon.name && <div className="loader mx-auto my-5"></div>}
      <select className="text-capitalize form-select w-25 mx-auto" onChange={(e)=>{setvalue(e.target.value)}}>
        {pokemons.map((item, index) => (
          <option key={index} value={index+1}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Pokemon