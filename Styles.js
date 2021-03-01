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
      },
      modalContent: {
        justifyContent: 'center',
        //alignSelf: 'center',
        height:500,
        width: 300,
        //margin: 0,
        //backgroundColor: '#00000080',
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
        }
});

