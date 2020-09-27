import React, { useState, useEffect, createContext } from 'react';
import { GameContext } from '../context';
import { View, StyleSheet } from 'react-native';
import ColorList from '../components/ColorList';
import Header from '../components/Header';
import GameOptions from '../components/GameOptions';

// export const GameContext = createContext();

const GameScreen = () => {
  const [gameWon, setGameWon] = useState(false);
  const [colors, setColors] = useState({
    colors: [],
    colorToGuess: 'rgb(0,0,0)',
  });
  const [guesses, setGuesses] = useState(0);

  useEffect(() => {
    setColors(generateRandomColors(6));
  }, []);

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
    if (color === colors.colorToGuess) {
      setGuesses(guesses + 1);
      console.log('true');
      setColors({
        ...colors,
        colors: colors.colors.map(() => color),
      });
      setGameWon(true);
    } else {
      setGuesses(guesses + 1);

      setColors({
        ...colors,
        colors: colors.colors.map((col) =>
          col === color ? ' rgb(255, 255, 255)' : col
        ),
      });
    }
  }

  // const colorToGuess = colors[Math.floor(Math.random() * colors.length)]

  return (
    <View>
      <GameContext.Provider value={gameWon}>
        <Header colorToGuess={colors.colorToGuess} gameWon={gameWon} />
        <GameOptions />
        <ColorList colors={colors.colors} checkWin={checkWin} />
      </GameContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
