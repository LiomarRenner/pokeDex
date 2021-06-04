import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});


const getPokemon = () => {
  api.get("/pokemon/1")
  .then((res) => {
    console.log( res.data );
  })
  .catch((err) => {
    console.log("Vixe, Meu padin teve um erro no getPokemon" + err)
  })
}

const getPokemonInfo = () => {
  api.get("/pokemon/name")
  .then((res) => {
    console.log(res.data.results);
  })
  .catch((err) => {
    console.log("Vixe, Meu padin teve um erro no getPokemonInfo" + err)
  })
}

export { api, getPokemon, getPokemonInfo };
