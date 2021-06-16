import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

//import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/stackNavigator';

import ImageColors from 'react-native-image-colors';
import colors from '../../../styles/colors';
import  PokemonInfo from '../../components/PokemonInfo';


interface Props extends StackScreenProps<RootStackParams ,'InfoPokeScreen'>{};

const InfoPokeScreen = ({ navigation, route}: Props ) => {
  const { pokemon } = route.params;
  const { id, name, photo } = pokemon;
  const [ bkgroundColor, setBkgroundColor ] = useState('white');
  const isMounted = useRef(true);

  //const { pokemonFull } = usePokemonFull( id );
  //console.log(pokemonFull);

  useEffect(() => {

    ImageColors.getColors( photo, { fallback: 'white' })
        .then( (colors: any) => {

          if ( !isMounted.current ) return;

          ( colors.platform === 'android' )
            ? setBkgroundColor( colors.vibrant || 'white' )
            : setBkgroundColor( colors.background || 'white' )
        });

    return () => {
         isMounted.current = false
    }

  }, []);

  return(
    <>
      <View style={{...styles.headContainer, backgroundColor: bkgroundColor}}>
        <Image source={{ uri: photo }} style={ styles.image }/>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.pokemonName}>{name }#00{id}</Text>
        <PokemonInfo />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headContainer: {
    flex:1,
    alignItems:'center',
    zIndex: 990,
  },
  image: {
    width: 220,
    height: 220,
    bottom: -35,
    position:'absolute',
  },
  bodyContainer: {
    flex:2,
    backgroundColor: colors.black,
    alignItems: 'flex-start',
  },
  pokemonName: {
    color: colors.white,
    fontSize: 22,
    fontWeight:'bold',
    //alignSelf: 'flex-start',

    margin: 25,
  },
})

export default InfoPokeScreen;
