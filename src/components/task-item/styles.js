import { StyleSheet } from "react-native";

import { colors } from '../../colors.js';

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: colors.soft_primary,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: colors.soft_primary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  taskText: {
    fontSize: 15,
    color: colors.primary,
  },
  icon: {
    color: colors.danger,
    fontSize: 16,
  },
});
