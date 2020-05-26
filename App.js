import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./components/Header";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Start from "./screens/Start";

export default function App() {
  const [playing, setPlaying] = useState(false)

  return (
    <View style={styles.screen}>
      <View style={styles.game}>
        <Header />
      </View>
      <View style={styles.start}>
        <Start />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {},
  start: {
    height: "100%"
  },
  game: {
    display: "none"
  }
});

// import React from 'react'
// import {View, Button, Text, StyleSheet} from "react=native"

// const Start = (props) => {
//     return ()
// }

// const styles = StyleSheet.create({})

// export default Start;
