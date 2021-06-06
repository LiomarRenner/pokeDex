import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import POKEBALL from '../../assets/images/Pokeball.png';
import PokemonCard from '../../components/PokemonCard';
import colors from '../../../styles/colors';
import { usePokemonPaginated } from '~/hooks/usePokemonPaginated';

const HomeScreen = () => {

  const { pokemonList, getPokemons } = usePokemonPaginated();

  const navigation = useNavigation();

  function handlePokeInfo(){
    navigation.navigate('InfoPokeScreen');
  }


  return (
    <>
      <ImageBackground
        source={POKEBALL}
        style={styles.containerImage}
        resizeMode="cover"
      >
      </ImageBackground>

      <FlatList
        data = { pokemonList }
        keyExtractor = { (pokemon) => pokemon.id}
        renderItem = { ({ item }) => ( <Image source={{ uri: item.photo }} style={ styles.image }/> )}
        numColumns={ 1 }

        onEndReached = { getPokemons }
        onEndReachedThreshold = { 0.5 }
      />
    </>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    flex:1,
    justifyContent:'space-around',
    flexDirection:'column',
  },
  containerCard: {

  },
  image: {
    width: 50,
    height: 50,
  }

})

export default HomeScreen;
