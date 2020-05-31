import React from "react";

import { View, StyleSheet, FlatList } from "react-native";
import ColorSquare from "./ColorSquare";

const ColorList = (props) => {  
  return (
    <View style={styles.container}>
      {props.colors.map((color) => {
        return <ColorSquare key={color} color={color}  />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: " rgb(216, 206, 206)",
    height: "100%"
  }
});

export default ColorList;
