import 'react-native-gesture-handler'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/screens/home';
import Login from './components/screens/login';
import Feed from './components/screens/feed';
import Counter from './components/screens/counter';
import Product from './components/screens/product';
import Register from './components/screens/Register';
import Cadastro_produto from './components/screens/addproduct';


function Bottomtabs(){
  const BottomTab = createBottomTabNavigator();
  return(
    <BottomTab.Navigator 
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
        <BottomTab.Screen name='Product' component={Product}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="shopping-cart" size={24} color="black" />
          ),
        }}/>
        <BottomTab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}/>
        <BottomTab.Screen name='feed' component={Feed}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="feed" size={24} color="black" />
          ),
        }}/>
        <BottomTab.Screen name='counter' component={Counter}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="exposure-minus-1" size={24} color="black" />
          ),
        }}/>
        <BottomTab.Screen name='addproduct' component={Cadastro_produto}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="app-registration" size={24} color="black" />
          ),
        }}/>

      </BottomTab.Navigator>
  )
}

export default function App() {

const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Cadastro' component={Register}/>
      <Stack.Screen options={{headerShown:false}} name= 'Hometab' component = {Bottomtabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


