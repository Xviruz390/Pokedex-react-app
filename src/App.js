import './App.css';
import React, { useState, useEffect } from 'react';
import BarraNav from './componentes/Barra-nav';
import Pokemon from './componentes/Pokemon';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonFiltrados, setPokemonFiltrados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://pokeapi.co/api/v2/pokemon/";

      try {
        const responses = await Promise.all(
          Array.from({ length: 151 }, (_, index) =>
            fetch(`${URL}${index + 1}`).then(response => response.json())
          )
        );

        setPokemonData(responses);
        setPokemonFiltrados(responses); // Mostrar todos al inicio
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, []);

  function filtarPorTipo(tipo) {
    if (tipo === "ver-todos") {
      setPokemonFiltrados(pokemonData); // Mostrar todos los Pokémon
    } else {
      const filtrados = pokemonData.filter(poke =>
        poke.types.some(p => p.type.name === tipo)
      );
      setPokemonFiltrados(filtrados);
    }
  }

  return (
    <div>
      <BarraNav filtarPorTipo={filtarPorTipo} />
      <div className="pokemon-todos">
        {pokemonFiltrados.map((poke, index) => (
          <Pokemon
            key={index + 1}
            id={`#${(index + 1).toString().padStart(3, "0")}`}
            img={poke.sprites.other["official-artwork"].front_default}
            nombre={poke.name}
            tipo={poke.types[0].type.name}
            tipo2={poke.types[1] ? poke.types[1].type.name : ""}
            height={poke.height + "M"}
            weight={poke.weight + "Kg"}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
