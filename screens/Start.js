import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';

const StartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.info}>
        <Text style={styles.title}>R.G.B.</Text>
        <Text>
          "Red Green Blue." It refers to the three hues of light that can mix
          together to form any color.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* <Button style={styles.btn} title="Start" /> */}
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => {
            props.navigation.navigate('Game');
          }}
        >
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => props.navigation.navigate('LeaderBoard')}
        >
          <Text>LeaderBoard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 100,
    paddingHorizontal: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 100,
  },
  buttonContainer: {
    width: '60%',
  },
  btn: {
    padding: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 0,
    shadowOpacity: 0.2,
    elevation: 10,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  btnText: {
    fontSize: 25,
    color: '#444',
  },
});

export default StartScreen;
