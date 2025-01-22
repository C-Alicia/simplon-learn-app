import { StyleSheet } from "react-native";
import COLORS from "../../../constants/colors";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        width: '100%',
      },
      title: {
        fontSize: 26,
        // fontWeight: 'bold',
        color: "#CE0033",
        marginVertical: 5,
        fontFamily: "NunitoSans_700Bold",
      },
      subtitle: {
        fontSize: 16,
        color: "#212529",
        fontFamily: "NunitoSans_700Bold",
      },
      profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.primary,
      },
})

export default styles;