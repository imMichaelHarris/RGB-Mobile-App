import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput"

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false)
  const addGoalHandler = (goal) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goal },
    ]);
    setAddMode(false)
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  const cancelGoal = () => {
    setAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setAddMode(true)}/>
     <GoalInput visible={addMode} addGoalHandler={addGoalHandler} onCancel={cancelGoal}/>
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler}/>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  
});
