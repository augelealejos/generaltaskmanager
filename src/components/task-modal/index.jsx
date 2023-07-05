import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";
import { colors } from '../../colors';

const TaskModal = ({ isVisible, selectedTask, setIsVisible, onHandleDelete }) => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Task Detail</Text>
      <View style={styles.modalDetailContainer}>
        <Text style={styles.modalDetailMessage}>
          Are you absolutely sure about deleting this item?
        </Text>
        <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button title="No" color={colors.primary} onPress={() => setIsVisible(false)} />
        <Button
          title="Yes"
          color={colors.danger}
          onPress={() => onHandleDelete(selectedTask?.id)}
        />
      </View>
    </View>
  );
}
export default TaskModal;