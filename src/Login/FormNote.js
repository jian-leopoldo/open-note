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
    id:''
  };

  componentDidMount(){
    () => listarDados();
  }
  
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

    let userMobilePath = "/user/details/"+ this.state.id;

    return firebase.database().ref(userMobilePath).set({
        title: this.state.title,
        description: this.state.description
    })
  }

  renderErrorMessage(){
    if (this.state.errorMessage != ''){
      return (
        <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
      );
    }
  }

  saveData() {

    let userMobilePath = "/user/details";
    if (this.state.title != "" && this.state.description != ""){
      try {
        firebase.database().ref(userMobilePath).push({
          title: this.state.title,
          description: this.state.description
        })
        Alert.alert("Sucesso","Nota Salva com sucesso");
  
      } catch (error) {
          Alert.alert("Erro ao salvar nota",error.toString());
      }

    }
    else{
      this.setState({
        errorMessage: "Insira dados validos"
      })
    }
    
    
  }

  listarDados(){
    var details = firebase.database().ref("/user/details");
    details.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({note: snapshot.val()});
    });
  }

  render() {
    let {note} = this.state;
    return (
      <View style={styles.container}>
        <FormLabel>Título da nota</FormLabel>
        <FormInput onChangeText={this.setTitle}/>
        {this.renderErrorMessage()}
        <FormLabel>Descrição da nota</FormLabel>
        <FormInput  onChangeText={this.setDescription}/>
        {this.renderErrorMessage()}
        <Button 
          title="Salvar" 
          icon={{name: 'md-checkmark', type: 'ionicon'}}
          //onPress={() => this.login(this.state.email,this.state.password)}
          onPress={() => this.saveData()}
          style={styles.btnLogin}
          backgroundColor='#426cb4'/>
        <Text>{note}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  btnLogin: {
    height: 40,
    color: 'white',
    backgroundColor: '#42c2f4'
  }
 
});
