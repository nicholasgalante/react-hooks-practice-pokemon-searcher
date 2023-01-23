import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => setPokemonArray(data))
  },[])

  function onSearchChange(searchValue){
    setSearch(searchValue)
  }

  const displayedPokemon = pokemonArray.filter(pokemon => {
    return pokemon.name.includes(search)
  })
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onSearchChange={onSearchChange}/>
      <br />
      <PokemonCollection displayedPokemon={displayedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
