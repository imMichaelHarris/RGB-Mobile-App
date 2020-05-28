import React from "react";
import { View, StyleSheet } from "react-native";

const ColorSquare = () => {
  return <View style={styles.square}></View>;
};

const styles = StyleSheet.create({
  square: {
    height: 200,
    width: 200,
    backgroundColor: "black"
  }
});

export default ColorSquare;
