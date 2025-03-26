

import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Home from './components/screens/home';
import Login from './components/screens/login';


export default function App() {

const Drawer = createDrawerNavigator();

  return (
    
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Home' component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}