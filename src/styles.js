import { StyleSheet, StatusBar } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 20,
  },
});
