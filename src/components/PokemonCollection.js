import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonArray}) {

  const displayPokemonCard = pokemonArray.map(pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemonCard}
    </Card.Group>
  );
}

export default PokemonCollection;
