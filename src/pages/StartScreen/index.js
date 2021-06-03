import React from 'react';

import {
   Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar,
} from 'react-native';
import ASH_HOME from '../../assets/images/Ash_Home.png';

const StartScreen = () => (
  <ImageBackground
    source={ASH_HOME}
    style={styles.container}
    resizeMode="contain"
  >
    <StatusBar barStyle="light-content" backgroundColor="#cc0000" />

    <Text style={styles.welcome}>Welcome to</Text>
    <Text style={styles.instructions}>PokeDesk</Text>

    <TouchableOpacity
         style={styles.button}
    >
      <Text style={styles.textButtonInstructions}> Start </Text>
    </TouchableOpacity>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor:'#cc0000',
    flexDirection:'column',
    justifyContent:'space-between'
  },
  welcome: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    paddingTop:40,
    marginTop:45,
  },
  instructions: {
    color: '#fff',
    fontSize: 52,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 10,
    marginBottom:50,
  },
  textButtonInstructions: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#cc0000'
  }
});

export default StartScreen;
