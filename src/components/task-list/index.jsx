import { styles } from "./styles.js";

import { View, Text, Button, SafeAreaView, FlatList, Modal } from "react-native";

const TaskList = ({tasks, renderItem}) => {
    return (
        <FlatList
          data={tasks}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id}
        />
    );
};

export default TaskList;