import React from 'react';
import {
   Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import ASH_HOME from '../../assets/images/Ash_Home.png';
import colors from '../../../styles/colors';

const StartScreen = () => {
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('HomeScreen');
  }

  return (
    <>
      <ImageBackground
        source={ASH_HOME}
        style={styles.container}
        resizeMode="contain"
      >
        <StatusBar barStyle="light-content" backgroundColor="#cc0000" />

        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.instructions}>PokeDex</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
        >
          <Text style={styles.textButtonInstructions}> Start </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor:colors.dark_red,
    flexDirection:'column',
    justifyContent:'space-around'
  },
  welcome: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    paddingTop:40,
    marginTop:45,
  },
  instructions: {
    color: colors.white,
    fontSize: 52,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 10,
    marginBottom:50,
  },
  textButtonInstructions: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.red,
  }
});

export default StartScreen;
