import React, {useEffect, useRef} from "react";
import { StyleSheet, View, Text, Animated } from "react-native";

const Header = props => {


const colorRGB = () => {
  const color = props.colorToGuess
  // console.log(color.split(","))
  // console.log(color[0].split(" "))
  // color[2].split("").splice(-1, 1)
  // console.log(color.join(","))
}

colorRGB()
  return (
    
    // <Animated.View style={props.gameWon ? {...styles.header, backgroundColor: fadeAnim, backgroundColor: props.colorToGuess} : styles.header}>
    <View style={props.gameWon ? {...styles.header, backgroundColor: props.colorToGuess} : styles.header}>
      <Text style={styles.headerTitle}>{props.colorToGuess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    paddingTop: 36,
    backgroundColor: "rgb(34, 34, 34)",
    alignItems: "center",
    justifyContent: "center",
    
  },
  headerTitle: {
    color: "#fff",
    fontSize: 40
  }
});

export default Header;
