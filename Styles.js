import { StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    fonts:{
      fontSize: 24,
      justifyContent:'center',
    },
    modalPoisition: {
      height: '40%',
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderColor: 'black',
      borderWidth: 2,
      //backgroundColor: '#00000080'faded bg color white
    },
    textInput:{
      padding: 2,
      borderColor: 'black',
      borderWidth: 2,
    },
    XButtonContainer:{
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
    },
    UserPass:{
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
    //styles for profile pages
    SearchBar:{
      alignSelf: 'stretch',
      padding: 2,
      borderColor: 'black',
      borderWidth: 2,
    },
    ProfilePage:{
      flex: 1,
      height: '100%',
      width: '100%',
      padding: '1%',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      alignContent: 'center',
      justifyContent: 'center',
    },
    ProfileItemContainer:{ //ex. name, drug, doctor. im sure u get the idea
      flexDirection: 'row',
    },
});

