import { StyleSheet } from "react-native";

import { colors } from '../../colors.js';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 0.95,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: colors.primary,
    height: 37,
    borderColor: colors.primary,
  },
});
