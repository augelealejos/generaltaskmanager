import { View, TextInput, Text, Button, SafeAreaView, FlatList, TouchableOpacity, Modal } from 'react-native';
import { colors, styles } from './styles.js';
import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [borderColor, setBorderColor] = useState(colors.primary);

  const onHandleFocus = ()  => {
    setBorderColor(colors.primary);
  }

  const onHandleBlur = ()  => {
    setBorderColor(colors.primary);
  }

  const onHandleChangeText = (text) => {
    setTask(text);
  }

  const onHandlePress = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ]);

    setTask('');
  }

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.taskContainer} onPress={() => onHandleModal(item)}>
      <Text style={styles.taskText}>
        {item.value}
      </Text>
      <Text style={styles.icon}>
        delete
      </Text>
    </TouchableOpacity>
  )

  const onHandleModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  }

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input, 
            {borderColor: borderColor}
          ]}
          placeholder='Add new task'
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor={colors.primary}
          selectionColor={colors.primary}
          placeholderTextColor={colors.primary}

          onFocus={onHandleFocus}
          onBlur={onHandleBlur}

          onChangeText={onHandleChangeText}
          value={task}
        />
        <Button 
          disabled={task.length == 0}
          title='Create' 
          color={colors.primary}
          onPress={onHandlePress}/>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        content={styles.listContainer}
        contentContainerStyle={styles.list}
        alwaysBounceVertical={false}
        keyExtractor={item => item.id}
      />
    </View>
    <Modal visible={isVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you absolutely sure about deleting this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='No'
              color={colors.primary}
              onPress={() => setIsVisible(false)}
            />
            <Button 
              title='Yes'
              color={colors.danger}
              onPress={() => onHandleDelete(selectedTask?.id)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
