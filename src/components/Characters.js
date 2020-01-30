import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import characterStyle from "./styles/characters.module.scss";

const EXCHANGE_RATES = gql`
  {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

const Characters = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={characterStyle.container}>
      {data.characters.results.map(character => (
      <div className={characterStyle.character}>
          <img width="100" height="100" src={character.image} alt={character.name} />
          <ul key={`character-${character.id}`}>
            <li>{character.name}</li>
            <li>{character.status}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Characters;
