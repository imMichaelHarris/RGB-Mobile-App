import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.colorToGuess.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 200,
    paddingTop: 36,
    backgroundColor: "rgb(34, 34, 34)",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "#fff",
    fontSize: 40
  }
});

export default Header;
