import React from 'react';
import { PokemonCardComponent } from '../../components/PokemonCardComponent';
import './styles.css';

export const HomePage = () => {
  return (
    <>
      <main className="home-page__main">
        <PokemonCardComponent />
      </main>
    </>
  );
};
