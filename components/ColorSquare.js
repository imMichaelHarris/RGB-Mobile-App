import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { GameContext } from '../context';

const ColorSquare = (props) => {
  const { gameWon } = useContext(GameContext);

  if (gameWon) {
    return (
      <View style={{ ...styles.square, backgroundColor: props.color }}></View>
    );
  }

  return (
    <TouchableOpacity
      onPress={!gameWon ? () => props.checkWin(props.color) : null}
    >
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
