import React from "react";

import { View, StyleSheet, FlatList } from "react-native";
import ColorSquare from "./ColorSquare";

const ColorList = (props) => {  
  return (
    <View style={styles.container}>
      {props.colors.map((color, index) => {
        return <ColorSquare key={index} color={color}  checkWin={props.checkWin}/>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: "100%"
  }
});

export default ColorList;
