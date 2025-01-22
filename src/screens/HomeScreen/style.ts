import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
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
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  
 
coursesListContainer: {
  flex:1,
padding: 5,
width: '100%',
},
  courseCard: {
    flexDirection: 'column',
    padding: 15,
    width: '100%',
    borderRadius: 10,
    marginVertical:4,
  },

  coursesList:{
marginBottom:50,

  },

  courseCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  courseCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems:'flex-end'
  },
  courseCardButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal:10,
    paddingVertical: 4,
    borderRadius: 5
  },
  courseCardTitle:{
    fontSize: 20,
    width: '65%',
    color: COLORS.dark,
    marginVertical: 5,
    fontFamily: "NunitoSans_700Bold",
  },
  courseCardStudentList:{
flexDirection: 'row',

  },
  courseCardAvatar:{
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginLeft: -8
  },
  courseCardStudentNumber:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.dark,
    marginLeft: -8
  }
});

export default styles;