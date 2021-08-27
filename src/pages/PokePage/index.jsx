import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { PokemonCardComponent } from '../../components/PokemonCardComponent';
import { useGetPokemonById } from '../../hooks/useGetPokemonById';
import './styles.css';

export const PokePage = () => {
  const { id } = useParams();
  const { pokemon } = useGetPokemonById(id);

  const history = useHistory();

  const handleNextPokemon = () => {
    history.push(`/pokemon/${pokemon.index + 1}`);
  };

  const handlePreviousPokemon = () => {
    history.push(`/pokemon/${pokemon.index - 1}`);
  };

  return (
    <>
      <main className="home-page__main">
        <section className="home-page__content">
          <PokemonCardComponent pokemon={pokemon ?? pokemon} />
          <div className="handle-pokemon__container">
            <Button
              onClick={handlePreviousPokemon}
              disabled={Number(id) - 1 <= 0}
            >
              Back
            </Button>
            <span className="handle-pokemon__active-pokemon-index">
              {`${pokemon?.index}`.padStart(3, '0')}
            </span>
            <Button onClick={handleNextPokemon}>Next</Button>
          </div>
        </section>
      </main>
    </>
  );
};
