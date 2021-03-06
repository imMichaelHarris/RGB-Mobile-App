import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import GameScreen from './screens/GameScreen';
import LeaderBoard from './screens/LeaderBoard';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Start from './screens/Start';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans": require("./")
//   })
// }
const Stack = createStackNavigator();

export default function App() {
  const [playing, setPlaying] = useState(false);

  const startPlaying = () => {
    setPlaying(true);
    console.log('start');
  };

  console.log(playing);
  return (
    // <Button title="Hey" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Start'
          component={Start}
          options={{ title: 'Welcome to R.G.B.', headerShown: false }}
        />
        <Stack.Screen
          name='Game'
          component={GameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='LeaderBoard' component={LeaderBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {},
  start: {
    height: '100',
  },
  start: {
    backgroundColor: '#ddd',
  },
  game: {
    // display: "none"
  },
});

// import React from 'react'
// import {View, Button, Text, StyleSheet} from "react=native"

// const Start = (props) => {
//     return ()
// }

// const styles = StyleSheet.create({})

// export default Start;
