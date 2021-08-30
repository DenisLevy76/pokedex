import React from 'react';
import { Loader } from '../Loader';

import './styles.css';

export const PokemonCardLoading = () => {
  return (
    <article className="pokemon-card-loading__article-container">
      <header className="pokemon-card-loading__title-container">
        <Loader extraStyles={{ height: '2rem', width: '150px' }} />
        <Loader extraStyles={{ height: '1rem' }} />
      </header>
      <div className="pokemon-card-loading__pokemon-icon">
        <Loader extraStyles={{ height: '100%' }} />
      </div>

      <div className="pokemon-card-loading__description">
        <h2 className="pokemon-card-loading__description-title title">
          <Loader extraStyles={{ height: '1rem' }} />
        </h2>
        <p className="pokemon-card-loading__pokemon-description">
          <Loader extraStyles={{ height: '1rem' }} />
        </p>
      </div>

      <div className="pokemon-card-loading__separator"></div>

      <div className="pokemon-card-loading__moves-container">
        <h3 className="pokemon-card-loading__moves-title title">
          <Loader extraStyles={{ height: '1.2rem' }} />
        </h3>
        <span className="pokemon-card-loading__moves">
          <Loader extraStyles={{ height: '1rem' }} />
        </span>
      </div>
    </article>
  );
};
