import { Text, SafeAreaView, StyleSheet } from 'react-native';

import MainScreen from './navigation/MainScreen'



export default function App() {
  return (
    
     <MainScreen/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
 
  },

});
