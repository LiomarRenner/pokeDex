import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  FlatList,
} from 'react-native';

import POKEBALL from '../../assets/images/Pokeball.png';
import PokemonCard from '../../components/PokemonCard';
import colors from '../../../styles/colors';
import { usePokemonPaginated } from '~/hooks/usePokemonPaginated';

const HomeScreen = () => {

  const { pokemonList, getPokemons } = usePokemonPaginated();

  return (
    <>
      <ImageBackground
        source={POKEBALL}
        style={styles.containerImageBackground}
        resizeMode="cover"
      >
        <FlatList
          data = { pokemonList }
          keyExtractor = { (pokemon) => pokemon.id}
          renderItem = { ({ item:pokemon }) => ( <PokemonCard pokemon = { pokemon } /> )}
          numColumns={ 1 }

          onEndReached = { getPokemons }
          onEndReachedThreshold = { 0.5 }
        />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  containerImageBackground: {
    flex:1,
    justifyContent:'space-around',
    flexDirection:'column',
  },
})

export default HomeScreen;
