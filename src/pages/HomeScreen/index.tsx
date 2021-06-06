import React, { useState, useEffect } from 'react';
import {
  ImageBackground, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { api } from '../../services/api';
import POKEBALL from '../../assets/images/Pokeball.png';
import PokemonCard from '../../components/PokemonCard';
import colors from '../../../styles/colors';
import { usePokemonPaginated } from '~/hooks/usePokemonPaginated';

const HomeScreen = () => {

  usePokemonPaginated();

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

  }

})

export default HomeScreen;
