import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './App/Screens/Login/Login';
import SignUp from './App/Screens/SignUp/SignUp';
import Home from './App/Screens/Home/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


class App extends Component {
  state = {
    count: 0
  }


  
 render() {
  const mainStack = () => {
    return(
      <Tab.Navigator>
      <Tab.Screen name="Home" component={SignUp} options={{
      tabBarVisible: false, //like this
    
      tabBarButton: (props) => null, //this is additional if you want to hide the tab element from the bottom nav
    }}  screenOptions={{
      headerShown: false
    }} />
      <Tab.Screen name="Feed" component={SignUp} options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null, //this is additional if you want to hide the tab element from the bottom nav
    }} />
    </Tab.Navigator>
  )
}

// const secondStack = () => { //Import the other screens you use!
//   return(
//    <Stack.Navigator>
//     <Stack.Screen name="Other" component={OtherScreen} />
//     <Stack.Screen name="Screens" component={DiffScreen}/>
//    </Stack.Navigator>
// )
// }




    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Menu" component={Home}  options={{ headerBackVisible: false, headerStyle: {
      backgroundColor: '#17e31a'
    }, }}/>

      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  
})

export default App;