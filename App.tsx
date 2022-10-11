import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AuthNavigation from './src/navigation/AuthNavigation';
import { store } from './src/store';


const App = () => {
  return (
    <>
      <View style={styles.container}>

      <Provider store={store}>
      <AuthNavigation/>
      </Provider>
      </View>
      <StatusBar style="auto" />

    </>
  )
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
