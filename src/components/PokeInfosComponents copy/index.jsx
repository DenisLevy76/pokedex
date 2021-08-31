import React from 'react';
import { Loader } from '../Loader';
import './styles.css';

export const PokeInfosComponents = ({ pokemon, loading }) => {
  return (
    <article className="pokemon-card__article-container">
      <header className="pokemon-card__title-container">
        <h1>{pokemon?.name}</h1>
        <p className="pokemon-card__title-types">
          {loading ? (
            <>
              <Loader extraStyles={{ height: '2rem', width: '150px' }} />
              <Loader extraStyles={{ height: '1rem' }} />
            </>
          ) : (
            pokemon?.types.map((type) => type.type.name).join(', ')
          )}
        </p>
      </header>
      <div className="pokemon-card__pokemon-icon">
        {loading ? (
          <Loader extraStyles={{ height: '100%' }} />
        ) : (
          <img src={pokemon?.img} alt={pokemon?.name} />
        )}
      </div>

      <div className="pokemon-card__description">
        <h2 className="pokemon-card__description-title title">
          {loading ? (
            <Loader extraStyles={{ height: '1rem' }} />
          ) : (
            'Description'
          )}
        </h2>
        <p className="pokemon-card__pokemon-description">
          {loading ? (
            <Loader extraStyles={{ height: '1rem' }} />
          ) : (
            pokemon?.description
          )}
        </p>
      </div>

      <div className="pokemon-card__separator"></div>

      <div className="pokemon-card__moves-container">
        <h3 className="pokemon-card__moves-title title">
          {loading ? <Loader extraStyles={{ height: '1.2rem' }} /> : 'Moves'}
        </h3>
        <span className="pokemon-card__moves">
          {loading ? (
            <Loader extraStyles={{ height: '1rem' }} />
          ) : (
            pokemon?.moves.map((move) => (
              <p key={move.move.name}>{move.move.name}</p>
            ))
          )}
        </span>
      </div>
    </article>
  );
};
