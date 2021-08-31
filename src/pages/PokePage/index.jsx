import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Loader } from '../../components/Loader';
import { PokeInfosComponents } from '../../components/PokeInfosComponents';
import { PokemonCardLoading } from '../../components/PokemonCardLoading';
import { useGetPokemonById } from '../../hooks/useGetPokemonById';
import { pokemonTypes } from '../../styles/pokemonTypes';

import './styles.css';

export const PokePage = () => {
  const { id } = useParams();
  const { pokemon, loading } = useGetPokemonById(id);

  const history = useHistory();

  const handleNextPokemon = () => {
    if (pokemon.index + 1 > 898) {
      history.push(`/pokemon/${1}`);
    } else {
      pokemon && history.push(`/pokemon/${pokemon.index + 1}`);
    }
  };

  const handlePreviousPokemon = () => {
    if (pokemon.index - 1 <= 0) {
      history.push(`/pokemon/898`);
    } else {
      pokemon && history.push(`/pokemon/${pokemon.index - 1}`);
    }
  };

  return (
    <>
      <main
        className={`home-page__main`}
        style={{
          backgroundColor: pokemonTypes[pokemon?.types[0].type.name].primary,
        }}
      >
        <section
          className="home-page__content"
          style={{
            background: `linear-gradient(${
              pokemonTypes[pokemon?.types[0].type.name].primary
            }, ${pokemonTypes[pokemon?.types[0].type.name].secondary})`,
          }}
        >
          {loading ? (
            <PokemonCardLoading />
          ) : (
            <PokeInfosComponents pokemon={pokemon ?? pokemon} />
          )}
          <div className="handle-pokemon__container">
            <Button onClick={handlePreviousPokemon} disabled={loading}>
              Back
            </Button>
            <span className="handle-pokemon__active-pokemon-index">
              {loading ? (
                <Loader extraStyles={{ height: '1rem', width: '27px' }} />
              ) : (
                `${pokemon?.index}`.padStart(3, '0')
              )}
            </span>
            <Button onClick={handleNextPokemon} disabled={loading}>
              Next
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};
