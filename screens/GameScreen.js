import React from "react";
import { View, StyleSheet } from "react-native";
import ColorSquare from "../components/ColorSquare";
import Header from "../components/Header";

const GameScreen = () => {
  return (
    <View>
      <Header />
      <ColorSquare />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
