import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const ColorSquare = (props) => {

  return (
    <TouchableOpacity onPress={() => props.checkWin(props.color)}>
      <View style={{ ...styles.square, backgroundColor: props.color }}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    height: 170,
    width: 170,
    margin: 10,
    borderRadius: 5,
  },
});

export default ColorSquare;
