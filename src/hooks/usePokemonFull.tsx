import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PokemonFull } from '../interfaces/pokemon';

export const usePokemonFull = ( id: string ) => {
  const [ pokemonFull, setPokemonFull ] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemonFull = async() => {
    const res = await api.get<PokemonFull>(`/pokemon/${ id }`);
    setPokemonFull( res.data );
  }

  useEffect(() => {
    loadPokemonFull();
  }, [])

  return {
    pokemonFull
  }
}
