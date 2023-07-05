import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  Modal,
} from "react-native";

import { TaskInput, TaskItem, TaskList, TaskModal } from "./components";
import { styles } from "./styles.js";

import { colors } from "./colors";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [borderColor, setBorderColor] = useState(colors.primary);

  const onHandleFocus = () => {
    setBorderColor(colors.primary);
  };

  const onHandleBlur = () => {
    setBorderColor(colors.primary);
  };

  const onHandleChangeText = (text) => {
    setTask(text);
  };

  const onHandlePress = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);

    setTask("");
  };

  const renderItem = ({ item }) => (
    <TaskItem item={item} onPressItem={onHandleModal} />
  );

  const onHandleModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TaskInput
          borderColor={borderColor}
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandlePress={onHandlePress}
          onHandleFocus={onHandleFocus}
          task={task}
        />
        <TaskList tasks={tasks} renderItem={renderItem} />
      </View>
      <Modal visible={isVisible} animationType="slide">
        <TaskModal
          isVisible={isVisible}
          selectedTask={selectedTask}
          setIsVisible={setIsVisible}
          onHandleDelete={onHandleDelete}
        />
      </Modal>
    </SafeAreaView>
  );
}
