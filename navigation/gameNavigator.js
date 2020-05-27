import { createStackNavigator } from "react-navigation-stack";
import Start from "../screens/Start"
import Game from "../components/Header"

createStackNavigator({
    StartScreen: Start,
    Game: { // additional way to add screens to react navigation
        screen: Game
    }
})