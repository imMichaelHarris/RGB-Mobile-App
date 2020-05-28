import React from "react";
import { View, StyleSheet } from "react-native";
import ColorSquare from "../components/ColorSquare";
import ColorList from "../components/ColorList"
import Header from "../components/Header";

const GameScreen = () => {

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

  const colorToGuess = colors[Math.floor(Math.random() * colors.length)]

  return (
    <View>
      <Header colorToGuess={colorToGuess}/>
      <ColorList colors={colors}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
