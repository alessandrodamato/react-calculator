import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import './Pokemon.css';

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

      <h1 className="mt-5 mb-3">Seleziona un pokemon:</h1>

      <select name="pokemon" className="text-capitalize form-select w-25 mx-auto mb-3" onChange={(e) => { setvalue(e.target.value) }}>
        {pokemons.map((item, index) => (
          <option key={index} value={index + 1}>{item.name}</option>
        ))}
      </select>

      {!pokemon.name && <div className="loader mx-auto my-5"></div>}

      {pokemon.name &&
        <>
          <h3 className="text-capitalize">Nome: {pokemon.name}</h3>

          <h3 className="text-capitalize">Abilities:
            {pokemon.abilities.map((ability, index) => (
              <span key={index}> {ability.ability.name}{pokemon.abilities.length - 1 !== index && <span> |</span>}</span>
            ))}
          </h3>
        </>
      }

    </div>
  );
}

export default Pokemon