import { Button, TextInput, View } from "react-native";

import { styles } from "./styles.js";

import { colors } from '../../colors.js';

const TaskInput = ({
  borderColor,
  onHandleFocus,
  onHandleBlur,
  onHandleChangeText,
  task,
  onHandlePress,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Add new task"
        autoCapitalize="none"
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
        disabled={task.length === 0}
        title="Create"
        color={colors.primary}
        onPress={onHandlePress}
      />
    </View>
  );
};

export default TaskInput;
