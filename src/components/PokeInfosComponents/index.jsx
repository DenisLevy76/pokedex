import React from 'react';
import './styles.css';

export const PokeInfosComponents = ({ pokemon }) => {
  return (
    <article className="pokemon-card__article-container">
      <header className="pokemon-card__title-container">
        <h1>{pokemon?.name}</h1>
        <p className="pokemon-card__title-types">
          {pokemon?.types.map((type) => type.type.name).join(', ')}
        </p>
      </header>
      <div className="pokemon-card__pokemon-icon">
        <img src={pokemon?.img} alt={pokemon?.name} />
      </div>

      <div className="pokemon-card__description">
        <h2 className="pokemon-card__description-title title">Description</h2>
        <p className="pokemon-card__pokemon-description">
          {pokemon?.description}
        </p>
      </div>

      <div className="pokemon-card__separator"></div>

      <div className="pokemon-card__moves-container">
        <h3 className="pokemon-card__moves-title title">Moves</h3>
        <span className="pokemon-card__moves">
          {pokemon?.moves.map((move) => (
            <p key={move.move.name}>{move.move.name}</p>
          ))}
        </span>
      </div>
    </article>
  );
};
