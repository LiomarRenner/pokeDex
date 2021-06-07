import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../../../styles/colors';

const PokemonInfo = () => {
  return (
    <View>
    </View>
  );
}

const styles = StyleSheet.create({
  pokemonName: {
    color: colors.white,
    fontSize: 22,
    fontWeight:'bold',
    //alignSelf: 'flex-start',
    left: 20
  },
  pokemonDescription: {
    color: colors.white,
    fontSize: 18,
    left: 20,
  },

})

export default PokemonInfo;
