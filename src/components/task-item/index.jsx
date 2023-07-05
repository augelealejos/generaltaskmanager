import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles.js";

const TaskItem = ({ onPressItem, item }) => {
  return (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={styles.taskContainer}
    >
      <Text style={styles.taskText}>{item.value}</Text>
      <Text style={styles.icon}>delete</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
