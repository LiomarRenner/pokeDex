export interface PokemonPaginated {
  count: number;
  next: string;
  previous: null;
  results: Result[];

}

export interface Result {
  name: string;
  url: string;
}

export interface OnePokemon {
  name: string;
  id: string;
  photo: string;
  color?: string;
}