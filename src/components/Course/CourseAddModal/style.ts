import { StyleSheet } from "react-native";
import COLORS from "../../../constants/colors";


const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    modalContent: {
      backgroundColor: COLORS.primary,
      padding: 20,
      borderRadius: 10,
      width: '100%',
      // height:'100%',
      color: COLORS.light,
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    formContainer: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: COLORS.light,
      fontFamily: 'NunitoSans_900Black'
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      color: COLORS.light,
      fontFamily: 'NunitoSans_400Regular'
    },
    button: {
      marginVertical: 20,
      backgroundColor: COLORS.light,
      paddingHorizontal: 15,
      paddingVertical: 6,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "75%",
    },
    buttonText: {
      color: COLORS.primary,
      textTransform: "uppercase",
      fontFamily: "NunitoSans_800ExtraBold",
    },
    close: {
      fontSize: 14,
      marginVertical: 20,
      textDecorationLine: 'underline',
      color: COLORS.light,
      fontFamily: 'NunitoSans_400Regular'
    },
    pressableContainer:{
        flex:1,
        backgroundColor: COLORS.primary,
    },
    container:{
        padding: 15,
        alignItems:'center',
        width:"100%"
    },
    // title:{
    //     fontSize: 18,
    //     fontFamily: "NunitoSans_400Regular",
    //     textTransform: 'uppercase',
    //     textAlign: 'center',
    //     color: COLORS.light
    // },
    label:{
        color: COLORS.light,
        fontFamily: "NunitoSans_400Regular",
        paddingLeft:14,
        marginTop: 10,
        width:"100%"
    },
    input: {
        color: COLORS.light,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: COLORS.light,
        padding: 10,
        fontSize: 18,
        fontFamily: "NunitoSans_400Regular",
        marginBottom: 10,
        width:"100%"
      },
    //   button: {
    //     backgroundColor: "#FFFFFF",
    //     paddingHorizontal:25,
    //     paddingVertical: 4,
        
    //     marginTop: 20,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: "center",

    //   },
    //   buttonText: {
    //     fontSize: 20,
    //     color: '#CE0033',
    //     textTransform: 'uppercase'
    //   },
      navigateButton: {
        color: COLORS.light,
        fontFamily: "NunitoSans_400Regular",
        textDecorationLine: "underline",
        marginTop: 25,
      }
  });

  export default styles;
  