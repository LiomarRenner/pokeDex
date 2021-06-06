import React, { useState, useEffect } from 'react';
import {
  ImageBackground, StyleSheet, FlatList, ScrollView, ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { api } from '../../services/api';
import POKEBALL from '../../assets/images/Pokeball.png';
import PokemonCard from '../../components/PokemonCard';
import colors from '../../../styles/colors';

const HomeScreen = () => {
  const { pokemon, setPokemon } = useState([]);

  const navigation = useNavigation();

  function handlePokeInfo(){
    navigation.navigate('InfoPokeScreen');
  }

  const getPokemonList = () => {
    api.get("/pokemon/")
    .then((res) => {
      console.log( res.data.results );
    })
    .catch((err) => {
      console.log("Vixe, Meu padin teve um erro no getPokemonList" + err)
    })
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  return(
      <ImageBackground
        source={POKEBALL}
        style={styles.containerImage}
        resizeMode="cover"
      >
        <PokemonCard
          onPress={() => handlePokeInfo()}
          style={styles.containerCard}
        />
        <PokemonCard
          onPress={() => handlePokeInfo()}
          style={styles.containerCard}
        />
      </ImageBackground>
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
