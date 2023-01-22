import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => setPokemonArray(data))
  },[])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemonArray={pokemonArray}/>
    </Container>
  );
}

export default PokemonPage;
