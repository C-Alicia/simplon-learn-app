import { Pressable, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
    pressableContainer:{
        flex:1,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 25,
        paddingVertical: 80
    },
    container:{
        padding: 15,
        alignItems:'center',
        width:"100%"
    },
    title:{
        fontSize: 18,
        fontFamily: "NunitoSans_400Regular",
        textTransform: 'uppercase',
        textAlign: 'center',
        color: COLORS.light
    },
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
      button: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal:25,
        paddingVertical: 4,
        
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",

      },
      buttonText: {
        fontSize: 20,
        color: '#CE0033',
        textTransform: 'uppercase'
      },
      navigateButton: {
        color: COLORS.light,
        fontFamily: "NunitoSans_400Regular",
        textDecorationLine: "underline",
        marginTop: 25,
      }
})

export default styles;