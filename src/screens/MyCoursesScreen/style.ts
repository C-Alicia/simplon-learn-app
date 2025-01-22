import { Pressable, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  buttonAdd: {
    justifyContent: "center",
    alignItems: "center",
    padding:2,
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 35,
    right: 20,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;
