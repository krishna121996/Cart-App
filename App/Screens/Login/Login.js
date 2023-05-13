import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native'
import styles from './Style';

class Login extends Component {
  state = {
    count: 0
  }

 render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../Images/homelogo.png')}
        />
        <View>
        <TextInput
          style={styles.textInput}
          placeholder="  Username!"
         // onChangeText={(text) => this.setState({text})}
         // value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="  Password!"
         // onChangeText={(text) => this.setState({text})}
         // value={this.state.text}
        />
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Menu')}>
                 <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Login;