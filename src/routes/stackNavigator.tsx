import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from '../pages/StartScreen';
import HomeScreen from '../pages/HomeScreen';
import InfoPokeScreen from '../pages/InfoPokeScreen';
import { Pokemon } from '../interfaces/pokemon';

export type RootStackParams = {
  StartScreen: undefined,
  HomeScreen: undefined,
  InfoPokeScreen: { pokemon: Pokemon}
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="InfoPokeScreen" component={InfoPokeScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
