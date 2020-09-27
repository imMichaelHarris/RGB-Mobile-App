import React, { useState, useEffect, createContext } from 'react';
import { GameContext } from '../context';
import { View, StyleSheet, Text } from 'react-native';
import ColorList from '../components/ColorList';
import Header from '../components/Header';
import GameOptions from '../components/GameOptions';

const GameScreen = () => {
  const [gameState, setGameState] = useState({
    gameWon: false,
    gameOver: false,
    difficulty: 'Easy',
    lives: [0, 0, 0],
    score: 0,
  });
  const [colors, setColors] = useState({
    colors: [],
    colorToGuess: 'rgb(0,0,0)',
  });

  useEffect(() => {
    newColors();
  }, [gameState.difficulty]);

  function reset() {
    setGameState({
      gameWon: false,
      gameOver: false,
      score: 0,
    });
  }
  function newColors(reset = false) {
    const { difficulty, gameWon } = gameState;
    if (difficulty === 'Easy') {
      setGameState({
        ...gameState,
        lives: [0, 0, 0],
        gameOver: false,
        score: reset ? 0 : gameState.score
      });
      setColors(generateRandomColors(4));
    } else {
      setGameState({
        ...gameState,
        lives: [0, 0],
        gameOver: false,
        score: reset ? 0 : gameState.score

      });
      setColors(generateRandomColors(6));
    }
    if (gameWon) {
      difficulty === 'Easy'
        ? setGameState({ ...gameState, gameWon: false, lives: [0, 0, 0] })
        : setGameState({ ...gameState, gameWon: false, lives: [0, 0] });
    }
  }

  function generateRandomColors(num) {
    //make array
    const arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
      //get random color and push to array
      arr.push(randomColor());
    }
    // return that array
    return {
      colors: arr,
      colorToGuess: arr[Math.floor(Math.random() * arr.length)],
    };
  }
  function randomColor() {
    //pick a 'red', 'green', and 'blue' from 0 to 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  function checkWin(color) {
    if (gameState.gameWon || color == null) {
      return;
    }

    if (color === colors.colorToGuess) {
      setColors({
        ...colors,
        colors: colors.colors.map(() => color),
      });

      setGameState({
        ...gameState,
        gameWon: true,
        score: gameState.score + gameState.lives.length,
      });
    } else if (gameState.lives.length - 1 === 0) {
      setGameState({
        ...gameState,
        lives: gameState.lives.slice(0, gameState.lives.length - 1),
        gameOver: true,
      });
      setColors({
        ...colors,
        colors: colors.colors.map((col) => (col === color ? null : col)),
      });
      return;
    } else {
      setGameState({
        ...gameState,
        lives: gameState.lives.slice(0, gameState.lives.length - 1),
      });
      setColors({
        ...colors,
        colors: colors.colors.map((col) => (col === color ? null : col)),
      });
    }
  }

  return (
    <View>
      <GameContext.Provider
        value={{
          gameState: gameState,
          setGameState: setGameState,
          newColors: newColors,
        }}
      >
        <Header
          colorToGuess={colors.colorToGuess}
          gameWon={gameState.gameWon}
        />
        <GameOptions />
        <Text style={styles.score}>Score: {gameState.score}</Text>
        {gameState.gameOver && (
          <Text style={styles.score}>
            Game Over! Your score is {gameState.score}
          </Text>
        )}
        <ColorList colors={colors.colors} checkWin={checkWin} />
      </GameContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  score: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#fff',
  },
});

export default GameScreen;
