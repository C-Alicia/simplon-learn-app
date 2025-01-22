import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  marker: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    overflow: "hidden",
  },
  markerImage: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
