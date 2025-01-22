import { StyleSheet } from "react-native";
import COLORS from "../../../constants/colors";

const styles = StyleSheet.create({
  coursesListContainer: {
    padding: 5,
    width: "100%",
  },
  courseCard: {
    flexDirection: "column",
    overflow: "hidden",
    width: 300,
    height: 250,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  courseCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  courseCardContent: {
    position: 'absolute',
    bottom:0,
    left:0,
    flexDirection: "column",
    justifyContent: "space-between",
    padding:10,
    width: '100%',
    height: 125,
    alignItems: "flex-end",
    backgroundColor: "rgba(255, 0, 0, 0.4)" 
  },
  courseCardButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
  courseCardTitle: {
    fontSize: 16,
    width: "100%",
    color: COLORS.light,
    marginVertical: 5,
    fontFamily: "NunitoSans_700Bold",
  },
  smallText: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 12,
    color: COLORS.light
  },
});

export default styles;
