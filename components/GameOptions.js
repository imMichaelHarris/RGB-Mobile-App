import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { GameContext } from '../context';

const GameOptions = () => {
  const { newColors, gameState, setGameState } = useContext(GameContext);
  const { difficulty, lives, gameWon, gameOver } = gameState;
  return (
    <View style={styles.bar}>
      <TouchableOpacity
        style={styles.change}
        onPress={() => (gameOver ? newColors(true) : newColors())}
      >
        <Text>{gameWon ? 'Play Again' : 'New Colors'}</Text>
      </TouchableOpacity>
      <View style={styles.lives}>
        {!gameWon &&
          lives.map((_, i) => (
            <Text style={styles.heart} key={i}>
              &#10084;
            </Text>
          ))}
        {gameWon && <Text>Correct!</Text>}
      </View>
      <View style={styles.difficulty}>
        <TouchableOpacity
          style={difficulty === 'Easy' ? styles.selected : styles.button}
          onPress={() => setGameState({ ...gameState, difficulty: 'Easy' })}
        >
          <Text style={difficulty === 'Easy' ? { color: '#fff' } : null}>
            Easy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={difficulty === 'Hard' ? styles.selected : styles.button}
          onPress={() => setGameState({ ...gameState, difficulty: 'Hard' })}
        >
          <Text style={difficulty === 'Hard' ? { color: '#fff' } : null}>
            Hard
          </Text>
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
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selected: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'rgb(34, 34, 34)',
    color: '#fff',
  },
  lives: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  change: {
    width: '30%',
  },
  heart: {
    paddingHorizontal: 2,
  },
});

export default GameOptions;
