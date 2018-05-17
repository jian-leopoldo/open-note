import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, ActivityIndicator, TextInput, Text } from 'react-native';
import LoginForm from './LoginForm';
import NavigationBar from '../shared/NavigationBar';

export default class Login extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar/>
        <View style={styles.inputContainer}>
          <Text style={styles.title}> Note App</Text>
        </View>
        <View style={styles.inputContainer}>
          <LoginForm />
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        </View>
      </View>
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
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
    width: 160,
    textAlign:'center'
  }
});
