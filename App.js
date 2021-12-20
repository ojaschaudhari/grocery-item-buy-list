import React from 'react'
import { Text, View } from 'react-native';
import Home from './Components/Home';
import styles from './Design/App-Design';

const App = () => {
  return (
    <View>
      <Text style={styles.heading}>
        Grocery Store
      </Text>
      <Home></Home>
    </View>
  )
}

export default App;