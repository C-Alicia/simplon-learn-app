import { StyleSheet } from "react-native";
import COLORS from "../../../constants/colors";

const styles = StyleSheet.create({
   
      categoryFilter: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 4
      },
      categoryIcon: {
        backgroundColor: COLORS.light,
        padding:4,
        borderRadius: 30,
    
      },
      categorySeparator: {
        width: 20,
        height: 8,
        backgroundColor: COLORS.light
      },
      categoryFilterName: {
        backgroundColor: COLORS.light,
        paddingVertical:4,
        paddingHorizontal:10,
        borderRadius: 30,
        
      },
});

export default styles;