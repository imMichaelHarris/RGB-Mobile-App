import React from "react";

import { View, StyleSheet, FlatList } from "react-native";
import ColorSquare from "./ColorSquare";

const ColorList = () => {
  function generateRandomColors(num) {
    //make array
    const arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
      //get random color and push to array
      arr.push(randomColor());
    }
    // return that array
    return arr;
  }
  function randomColor() {
    //pick a 'red', 'green', and 'blue' from 0 to 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  const colors = generateRandomColors(6);
  // return <FlatList data={colors} renderItem={({item}) => <} />;

  <View>{colors.map(color => {})}</View>;
};

const styles = StyleSheet.create({});

export default ColorList;
