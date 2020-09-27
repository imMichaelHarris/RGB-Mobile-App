import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const GameOptions = () => {
  console.log('In game options');
  return (
    <View style={styles.bar}>
      <Text style={styles.text}>New Colors</Text>
      <View style={styles.difficulty}>
          <TouchableOpacity style={styles.button}>
              <Text>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text>Hard</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bar: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 30,
  },
  difficulty: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-around',
  },
  button : {
      paddingHorizontal: 10,
      paddingVertical: 5,
  }

});

export default GameOptions;
