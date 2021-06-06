import { useEffect, useRef, useState } from 'react'
import { Pokemon, PokemonPaginated, Result } from '~/interfaces/pokemon';
import { api } from '../services/api'

const usePokemonPaginated = () => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const NEXT_URL = useRef('/pokemon?limit=20');

  const getPokemons = async() => {
    const res = await api.get<PokemonPaginated>(`${NEXT_URL.current}`);
    NEXT_URL.current = res.data.next;
    mapPokemonListToPokemon(res.data.results);
  }

  const mapPokemonListToPokemon = (pokemon: Result[]) => {
    const newPokemonList: Pokemon[] = pokemon.map(({ name, url }) => {
      const urlPieces = url.split('/');
      const id = urlPieces[ urlPieces.length - 2];
      const photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

      return {
        id,
        name,
        photo,
      };
    });
    setPokemonList([ ...pokemonList, ...newPokemonList]);
  }

  useEffect(() => {
    getPokemons();
  },[])

  return {
    pokemonList,
    getPokemons,
  }
 }

 export { usePokemonPaginated} ;
