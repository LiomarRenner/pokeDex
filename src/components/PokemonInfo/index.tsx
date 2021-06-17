import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { PokemonFull } from '../../interfaces/pokemon';
import colors from '../../../styles/colors';
interface Props {
  pokemon: PokemonFull;
}

const PokemonInfo = ({ pokemon }: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={ false } style={{ ...StyleSheet.absoluteFillObject }}>
      <View style={{
        ...styles.container,
        marginTop: 70
      }}>
        <Text style={ styles.title }>Peso</Text>
        <Text style={ styles.text }>{ pokemon.weight }lb</Text>

        <Text style={ styles.title }>Altura</Text>
        <Text style={ styles.text }>{ pokemon.height }m</Text>

        <Text style={ styles.title }>Experiência Base</Text>
        <Text style={ styles.text }>{ pokemon.base_experience }XP</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: colors.white,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
  sprite: {
    width: 70,
    height: 70
  }
})

export default PokemonInfo;
