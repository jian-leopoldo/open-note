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
import { Avatar, Card} from 'react-native-elements';



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

 logOut(){
  firebase.auth().signOut().then(function() {
    Actions.login();
  }, function(error) {
    
  });
 }
  render() {
    return (
      <View style={styles.container}>
        <Card
          title={this.state.email}
          >
          <Text style={{marginBottom: 10}}>
            Email Logado: {this.state.email}
          </Text>
        </Card>
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
  }

});