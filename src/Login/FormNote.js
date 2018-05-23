import React from 'react';
import { 
  Text,
  StyleSheet,
  Alert,
  View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FormLabel, FormInput, FormValidationMessage, Button, YellowBox} from 'react-native-elements';
import * as firebase from "firebase";

export default class FormNote extends React.Component {

  constructor(props){
    super(props)
  }

  state = {
    title: '',
    description: '',
    errorMessage: '',
    note: '',
  };
  
  setDescription = val => {
    this.setState({
      description: val
    });
  };

  setTitle = val => {
    this.setState({
      title: val
    })
  }

  updateData() {

    let userMobilePath = "/user/details";

    return firebase.database().ref(userMobilePath).set({
        title: this.state.title,
        description: this.state.description
    })
  }

  saveData() {

    let userMobilePath = "/user/details";

    return firebase.database().ref(userMobilePath).push({
        title: this.state.title,
        description: this.state.description
    })
  }

  listarDados(){
    var details = firebase.database().ref("/user/details/title");
    details.on('value', (snapshot) => {
      this.setState({note: snapshot.val()});
    });
  }

  render() {
    let {note} = this.state;
    return (
      <View style={styles.container}>
        <FormLabel>Título da nota</FormLabel>
        <FormInput onChangeText={this.setTitle}/>
        <FormLabel>Descrição da nota</FormLabel>
        <FormInput  onChangeText={this.setDescription}/>
        <Button 
          title="Login"  
          //onPress={() => this.login(this.state.email,this.state.password)}
          onPress={() => this.saveData()}
          style={styles.btnLogin}
          backgroundColor='#42c2f4'/>
        <Text>{note}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130f40',
    justifyContent: 'flex-start',
  },
  btnLogin: {
    height: 40,
    color: 'white',
    backgroundColor: '#42c2f4'
  }
 
});
