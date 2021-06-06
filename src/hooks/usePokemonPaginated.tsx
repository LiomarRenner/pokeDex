import { useEffect, useRef, useState } from 'react'
import { OnePokemon, PokemonPaginated, Result } from '~/interfaces/pokemon';
import { api } from '../services/api'

const usePokemonPaginated = () => {

  const [pokemonList, setPokemonList] = useState<OnePokemon[]>([]);
  const NEXT_URL = useRef('/pokemon?limit=20');

  const getPokemons = async() => {
    const res = await api.get<PokemonPaginated>(`${NEXT_URL.current}`);
    NEXT_URL.current = res.data.next;
    mapPokemonListToPokemon(res.data.results);
  }

  const mapPokemonListToPokemon = (pokemonList: Result[]) => {
    pokemonList.forEach( pokemon => console.log(pokemon.name))
  }

  useEffect(() => {
    getPokemons();
  },[])

  return {

  }
 }

 export { usePokemonPaginated} ;
