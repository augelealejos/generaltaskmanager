import { StyleSheet, StatusBar } from "react-native";

import { colors } from '../../colors';

export const styles = StyleSheet.create({
  listContainer: {
    marginTop: 25,
  },
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
  list: {
    gap: 15,
    paddingBottom: 20,
    paddingTop: 10,
  },
  icon: {
    color: colors.danger,
    fontSize: 16,
  },
});
