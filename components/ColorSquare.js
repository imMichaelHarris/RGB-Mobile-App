import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const ColorSquare = (props) => {
  console.log("here");
  return (
    <TouchableOpacity>
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
