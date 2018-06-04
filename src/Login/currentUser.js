import React from 'react';
import { 
  Alert, 
  AppRegistry, 
  Button, 
  StyleSheet, 
  View, 
  ActivityIndicator, 
  TextInput, 
  Text } from 'react-native';
import LoginForm from './LoginForm';
import NavigationBar from '../shared/NavigationBar';
import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";


export default class currentUser extends React.Component {
  
  state = {
    email: '',
    uid: '',
    meassage: '',
    loadingBar: true
 };

 componentDidMount(){
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  
  if (user != null) {
    email = user.email;
    uid = user.uid; 

    this.setState({
      email: user.email,
      uid: user.uid,
      loadingBar: false,
    })
  }
  else{
    this.setState({
      message: 'Nenhum usuário logado',
      loadingBar: false
    })
  }
 
  
 }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Email: {this.state.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    width: 250,
    padding: 4,
    backgroundColor:'white',
    marginBottom: 20
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  btnLogin: {
    height: 40,
    color: 'white',
    backgroundColor: '#42c2f4'
  }

});