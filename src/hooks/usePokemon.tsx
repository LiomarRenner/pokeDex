import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { PokemonFull } from '../interfaces/pokemon';

export const usePokemon = ( id: string ) => {
  const [ pokemon, setPokemon ] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemonFull = async() => {
    const res = await api.get<PokemonFull>(`/pokemon/1`);
    setPokemon( res.data );
  }

  useEffect(() => {
    loadPokemonFull();
  }, [])

  return {
    pokemon
  }
}
