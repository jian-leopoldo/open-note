import React from 'react';
import axios from 'axios';
import { Text, AppRegistry, StyleSheet, View, ActivityIndicator, TextInput, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import * as firebase from "firebase";


export default class LoginForm extends React.Component {
  
  constructor(props){
    super(props)
  }
  state = {
    email: '',
    password: '',
    errorMessage: '',
  };

  placeNameChangeHandler = val => {
    this.setState({
      email: val
    });
  };

  setPassword = val => {
    this.setState({
      password: val
    })
  }

  componentDidMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBwgY75O-efZdcLZfjOF6Y56bU0jR3hUSA",
      authDomain: "opennote-55807.firebaseapp.com",
      databaseURL: "https://opennote-55807.firebaseio.com",
      storageBucket: "opennote-55807.appspot.com"
    });
  }
  

  makeRequest = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(res.data);
      })
  }

  async login(email, pass) {
    
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);

        Actions.details();
        // Navigate to the Home page

    } catch (error) {
        Alert.alert("Erro ao realizar login",error.toString());
    }

}

  render() {

    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={this.placeNameChangeHandler} keyboardType={'email-address'}/>
        <FormLabel>Password</FormLabel>
        <FormInput  onChangeText={this.setPassword} secureTextEntry/>
        <Button 
          title="Login" 
          icon={{name: 'md-checkmark', type: 'ionicon'}}
          //onPress={() => this.login(this.state.email,this.state.password)}
          onPress={() => Actions.details()}
          style={styles.btnLogin}
          backgroundColor='#42c2f4'/>
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
