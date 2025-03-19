
import {View, StyleSheet} from 'react-native';
/*import Home from './components/screams/home';*/
import Login from './components/screams/login';

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