import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import { Pokemon } from '../../interfaces/pokemon';
import colors from '../../../styles/colors';

const windowWidth = Dimensions.get('window').width;
interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon } : Props ) => {

  const navigation = useNavigation();

  function handlePokeInfo(){
    navigation.navigate('InfoPokeScreen', { pokemon: pokemon });
  }
    return (
      <TouchableOpacity
        activeOpacity = { 0.6 }
        onPress={handlePokeInfo}
      >
        <View style = {{ ...styles.containerCard }}>
          <Text style = {styles.name }>
            {'#00' + pokemon.id}
            <Image source={{ uri: pokemon.photo }} style={ styles.image }/>
            {'  ' + pokemon.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerCard: {
      backgroundColor: colors.white,
      borderRadius: 20,
      marginHorizontal: 40,
      marginBottom:15,
      height: 80,
      width: windowWidth * 0.7,
    },
    image: {
      width: 50,
      height: 50,
    },
    name: {
      color: colors.black,
      fontSize: 18,
      left: 25,
      paddingBottom: 20,
    },

})

export default PokemonCard;
