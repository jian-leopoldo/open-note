import React from 'react';
import { 
  Alert, 
  AppRegistry, 
  Button, 
  StyleSheet, 
  View,
  Image,
  ActivityIndicator, 
  TextInput, 
  Text } from 'react-native';
import LoginForm from './LoginForm';
import NavigationBar from '../shared/NavigationBar';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.title}
            source={require('../img/OpenNote_logo.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
  }
});
