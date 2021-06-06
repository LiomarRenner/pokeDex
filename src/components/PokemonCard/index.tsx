import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Pokemon } from '~/interfaces/pokemon';
import colors from '../../../styles/colors';

const windowWidth = Dimensions.get('window').width;
interface Props {
  pokemon: Pokemon;
}
//<Image source={{ uri: item.photo }} style={ styles.image }/>
const PokemonCard = ({ pokemon } : Props ) => {
    return (
      <TouchableOpacity activeOpacity = { 0.6 }>
        <View style = {{ ...styles.containerCard }}>
          <View>
            <Text style = {styles.name }>
              {pokemon.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerCard: {
      flex:1,
      backgroundColor: colors.white,
      borderRadius: 20,
      paddingVertical: 10,
      alignItems: 'center',
      marginHorizontal: 40,
      marginTop:25,
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
      top: 15,
    },

})

export default PokemonCard;
