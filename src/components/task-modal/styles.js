import { StyleSheet, StatusBar } from "react-native";

import { colors } from "../../colors";

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 10,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: colors.primary,
  },
  selectedTask: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
