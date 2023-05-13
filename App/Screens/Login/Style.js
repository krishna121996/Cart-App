import {
    StyleSheet
  } from 'react-native'

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff'
    },
    textInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 20,
        width: 300,
        marginTop: 15
    },
    loginButton: {
      height: 40,
      borderColor: '#17e31a',
      borderWidth: 0.5,
      borderRadius: 20,
      width: 300,
      marginTop: 30,
      backgroundColor: '#17e31a'
    },
    loginButtonText: {
      alignSelf: 'center',
      marginTop: 10  
    }
  })

  export default styles;