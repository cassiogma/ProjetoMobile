import 'react-native-gesture-handler'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/screens/home';
import Login from './components/screens/login';


export default function App() {

const BottomTab = createBottomTabNavigator();

  return (
    
    <NavigationContainer>
      <BottomTab.Navigator 
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor:	'#3CB371',
        tabBarActiveBackgroundColor:'#EEE8AA',
        tabBarInactiveBackgroundColor:'#FFFFE0',
        tabBarInactiveTintColor:'#556B2F',
        headerStyle:{
          backgroundColor: '#EEE8AA',      },
        headerTintColor:'#3CB371',
        //headerTitleAlign:'center'
      }}
      >
        <BottomTab.Screen name='Login' component={Login}
        options={{
          tabBarIcon: () => (
            
            <MaterialIcons name="login" size={24} color="black" />
          ),
        }}/>
        <BottomTab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}/>

      </BottomTab.Navigator>
    </NavigationContainer>
  );
}


