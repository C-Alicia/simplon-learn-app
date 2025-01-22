import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#CE0033",
      paddingVertical: 75,
      paddingHorizontal: 15,
      alignItems: "center",
    },
    title: {
      fontSize: 36,
      color: "#FFFFFF",
      textAlign: "center",
      marginVertical: 10,
    },
    description: {
      fontSize: 16,
      color: "#FFFFFF",
      textAlign: "center",
      marginVertical: 10,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius:50,
      borderColor: COLORS.light,
      borderWidth:1
    },
    button: {
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 15,
      paddingVertical: 4,
      width: '75%',
      marginTop: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
    },
    buttonText: {
      fontSize: 20,
      color: '#CE0033',
      textTransform: 'uppercase'
    },
    disconnect: {
      marginTop: 'auto',
    },
    disconnectText: {
      textDecorationLine: 'underline',
      color: '#FFFFFF',
      textTransform:'uppercase'
    }
  });

  export default styles;