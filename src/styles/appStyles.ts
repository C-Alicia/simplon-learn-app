import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const appStyles = StyleSheet.create({
    textBlack: {
        color: "#000000",
      },
      textRed: {
        color: "#CE0033",
      },
      textWhite: {
        color: "#FFFFFF",
      },
      smallText: {
        fontFamily: "NunitoSans_400Regular",
        fontSize: 12
      },
      smallImportantTextLight: {
        fontFamily: "NunitoSans_600SemiBold",
        fontSize: 12,
        color: COLORS.light
      },
})

export default appStyles