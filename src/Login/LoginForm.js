import React from 'react';
import axios from 'axios';
import { Text, CameraRoll, AppRegistry, StyleSheet, View, ActivityIndicator, TextInput, Alert } from 'react-native';
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
    btnSpinner: false,
    iconBtn: {name: 'md-checkmark', type: 'ionicon'},
    photos: []
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

  iconBtn(){
    if (this.state.btnSpinner){
      return {};
    }else
    {
      return {name: 'md-checkmark', type: 'ionicon'};
    }
  }
  

  makeRequest = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(res.data);
      })
  }

  loadSpinner(){
    this.setState({
      btnSpinner: true,
      iconBtn: {}
    })
  }

  closeSpinner(){
    this.setState({
      btnSpinner: false,
      iconBtn: {name: 'md-checkmark', type: 'ionicon'}
    })
  }

  async login(email, pass) {
    this.loadSpinner();
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);

        Actions.details();
        // Navigate to the Home page

    } catch (error) {
        Alert.alert("Erro ao realizar login",error.toString());
        this.closeSpinner();
    }

}

  render() {

    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput underlineColorAndroid={'#42c2f4'} inputstyle={styles.input} onChangeText={this.placeNameChangeHandler} keyboardType={'email-address'}/>
        <FormLabel>Password</FormLabel>
        <FormInput underlineColorAndroid={'#42c2f4'} onChangeText={this.setPassword} secureTextEntry/>
        <Button 
          title="Login"
          loading={this.state.btnSpinner}
          icon={this.state.iconBtn}
          onPress={() => this.login(this.state.email,this.state.password)}
          style={styles.btnLogin}
          backgroundColor='#426cb4'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    padding: 4,
    backgroundColor:'white',
    marginBottom: 20,
    color: '#426cb4'
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
