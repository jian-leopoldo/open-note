import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, ActivityIndicator } from 'react-native';
import Login from './src/Login/Login';
import DetailsScreen from './src/Login/DetailsScreen';

import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootStack />;
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

const RootStack = createStackNavigator(
  {
    Home: Login,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);