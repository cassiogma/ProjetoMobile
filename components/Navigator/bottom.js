import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/screens/home';
import Login from './components/screens/login';


export default function App() {

const BottomTab = createBottomTabNavigator();

  return (
    
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Login' component={Login}/>
        <BottomTab.Screen name='Home' component={Home}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}