import { StyleSheet } from "react-native";

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
      width: "98%",
      height: "40%",
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
    }
  });

  export default styles;