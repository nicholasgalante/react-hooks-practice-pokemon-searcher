import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {name, hp, sprites} = pokemon;
  const [isFlipped, setIsFlipped] = useState(false)

  function handleClick(){
    setIsFlipped(()=>!isFlipped)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt={name} src={ isFlipped ? sprites.back : sprites.front } onClick={handleClick}/>
          
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
