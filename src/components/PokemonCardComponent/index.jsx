import React from 'react';
import './styles.css';

export const PokemonCardComponent = ({ pokemon }) => {
  return (
    <article className="pokemon-card__article-container">
      <div className="pokemon-card__title-container">
        <h1>Bulbasaur</h1>
        <p>Grass</p>
      </div>
      <div className="pokemon-card__pokemon-icon">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
        />
      </div>
    </article>
  );
};
