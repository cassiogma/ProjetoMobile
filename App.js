
import {View, StyleSheet} from 'react-native';
/*import Home from './components/screams/home';*/
import Login from './components/screens/login';

// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';


export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})