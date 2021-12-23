/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen'
import About from './components/About'
import LoginScreen from './components/LoginScreen'
import AddToDoScreen from './components/AddToDoScreen'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="To Do List" component={HomeScreen} />
        <Stack.Screen name='Add To Do' component={AddToDoScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App

