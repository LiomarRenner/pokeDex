import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const getPokemonList = () => {
  api.get("/pokemon/")
  .then((res) => {
    console.log(res.data.results);
  })
  .catch((err) => {
    console.log("Vixe, Meu padin teve um erro" + err)
  })
}

const getPokemonInfo = () => {
  api.get("/pokemon/name")
  .then((res) => {
    console.log(res.data.results);
  })
  .catch((err) => {
    console.log("Vixe, Meu padin teve um erro" + err)
  })
}

export { api, getPokemonList, getPokemonInfo };
