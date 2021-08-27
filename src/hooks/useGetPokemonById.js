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
    setResponse(null);
    setLoading(true);
    setError(null);

    const source = axios.CancelToken.source();

    (async () => {
      try {
        const responsePokemon = await getData(`pokemon/${id}`, {
          cancelToken: source.token,
        });

        const pokemonDescription = await getData(
          responsePokemon.data.species.url,
          {
            cancelToken: source.token,
          }
        );

        const pokemonData = {
          name: responsePokemon.data.name,
          types: responsePokemon.data.types,
          img: responsePokemon.data.sprites.other['official-artwork']
            .front_default,
          description:
            pokemonDescription.data.flavor_text_entries[28].flavor_text,
          moves: responsePokemon.data.abilities,
          index: responsePokemon.data.game_indices[3].game_index,
        };

        setLoading(false);
        setResponse(responsePokemon);
        setPokemon(pokemonData);
      } catch (error) {
        setLoading(false);
        setTimeout(() => history.push('/404'), 300);
      }
    })();

    return () => {
      source.cancel();
    };
  }, [id, history]);

  return { response, loading, error, pokemon };
};
