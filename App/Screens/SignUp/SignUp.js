import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import styles from './Style';

class SignUp extends Component {
  state = {
    count: 0
  }

 render() {
    return (
      <ScrollView style={{flex: 1}}>
      <View style={{backgroundColor: '#ffff'}}>
        <Image
          style={{marginTop: 50, alignSelf: 'center'}}
          source={require('../../Images/signuplogo.png')}
        />
        <View style={{alignSelf: 'center', marginTop: -50}}>
        <TextInput
          style={styles.textInput}
          placeholder="  First Name!"
         // onChangeText={(text) => this.setState({text})}
         // value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="  Last name!"
         // onChangeText={(text) => this.setState({text})}
         // value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="  Phone number!"
         // onChangeText={(text) => this.setState({text})}
         // value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="  Email id!"
         // onChangeText={(text) => this.setState({text})}
         // value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="  Password!"
         // onChangeText={(text) => this.setState({text})}
         // value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="  Confirm password!"
         // onChangeText={(text) => this.setState({text})}
         // value={this.state.text}
        />
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.loginButton}>
                 <Text style={styles.loginButtonText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    )
  }
}

export default SignUp;