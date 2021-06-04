import React from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../../styles/colors';

const PokemonCard = () => {
    return (
      <>
        <RectButton
          style={styles.container}
        >
        </RectButton>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      maxWidth: '45%',
      backgroundColor: colors.gray,
      borderRadius: 20,
      paddingVertical: 10,
      alignItems: 'center',
      margin: 10
    },

})

export default PokemonCard;
