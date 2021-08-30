import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getData } from '../services/api';

export const useGetPokemonById = (id) => {
  const [response, setResponse] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    setError(null);
    let cancel = false;

    const source = axios.CancelToken.source();

    (async () => {
      try {
        const responsePokemon = await getData(`pokemon/${id}`, {
          cancelToken: source.token,
        });

        const pokemonDescription = await getData(
          responsePokemon.data.species.url,
          { cancelToken: source.token }
        );

        const pokemonData = {
          name: responsePokemon.data.name,
          types: responsePokemon.data.types,
          img: responsePokemon.data.sprites.other['official-artwork']
            .front_default,
          description: pokemonDescription.data.flavor_text_entries.filter(
            (description) => description.language.name === 'en'
          )[0].flavor_text,
          moves: responsePokemon.data.moves.filter((move, index) => index < 4),
          index: responsePokemon.data.id,
        };

        if (cancel) return;

        setLoading(false);
        setResponse(responsePokemon);
        setPokemon(pokemonData);
      } catch (error) {
        setLoading(false);
        console.log(error);
        history.replace('/404');
      }
    })();

    return () => {
      cancel = true;
      // source.cancel();
    };
  }, [id, history]);

  return { response, loading, error, pokemon };
};
