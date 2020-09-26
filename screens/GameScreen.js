import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorSquare from '../components/ColorSquare';
import ColorList from '../components/ColorList';
import Header from '../components/Header';

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
      console.log('won');
      setGuesses(guesses + 1);
      setGameWon(true);
      return true;
    } else {
      setGuesses(guesses + 1);
      console.log('here');
      setColors({...colors, colors: colors.colors.map((col) => (col === color ? ' rgb(216, 206, 206)' : col))});
      return false;
    }
  }

  // const colorToGuess = colors[Math.floor(Math.random() * colors.length)]

  return (
    <View>
      <Header colorToGuess={colors.colorToGuess} gameWon={gameWon} />
      <ColorList colors={colors.colors} checkWin={checkWin} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
