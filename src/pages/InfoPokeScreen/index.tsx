import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '~/routes/stackNavigator';
import ImageColors from 'react-native-image-colors';
import colors from '../../../styles/colors';


interface Props extends StackScreenProps<RootStackParams ,'InfoPokeScreen'>{};

const InfoPokeScreen = ({navigation, route}: Props ) => {
  const { pokemon } = route.params;
  const { id, name, photo } = pokemon;
  const [ bkgroundColor, setBkgroundColor ] = useState('white');
  const isMounted = useRef(true);

  useEffect(() => {

    ImageColors.getColors( pokemon.photo, { fallback: 'white' })
        .then( (colors: any) => {

          if ( !isMounted.current ) return;

          ( colors.platform === 'android' )
            ? setBkgroundColor( colors.lightVibrant || 'white' )
            : setBkgroundColor( colors.background || 'white' )
        });

    return () => {
         isMounted.current = false
    }

  }, []);

  return(
    <>
      <View style={{...styles.headContainer, backgroundColor: bkgroundColor}}>
        <Image source={{ uri: pokemon.photo }} style={ styles.image }/>
      </View>
      <View style={styles.bodyContainer}>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headContainer: {
    flex:1,
    alignItems:'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  bodyContainer: {
    flex:2,
    backgroundColor: colors.black,
    alignItems: 'flex-start',
  },
})

export default InfoPokeScreen;
