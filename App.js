import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, ActivityIndicator } from 'react-native';
import Login from './src/Login/Login';
export default class App extends React.Component {
  
  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130f40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
