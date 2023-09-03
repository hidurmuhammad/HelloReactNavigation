import { StyleSheet } from 'react-native';

const differentFont = "Roboto-Regular";
const GlobalStyles= StyleSheet.create({
  blueText: {
    color: 'blue'
  },
  redText: {
    color: 'red'
  },
  settings_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text_input:{
    height: 200,
     padding: 10,
      backgroundColor: 'white' 
    },
    inputDifferentFont: {
      fontFamily: differentFont,
    },
    textDifferentFont: {
      fontSize: 14,
      marginVertical: 15,
      textAlign: 'center',
     // fontFamily: 'Roboto-Italic',
    },
    header:{
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    textStyle:{
      color:'black',
      fontSize: 14,
      fontWeight:'bold'
    },
    networkingContainer:{
        flex: 1,
        justifyContent: 'flex-start',
    }
});
export {GlobalStyles};