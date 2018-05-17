import React from 'react';
import axios from 'axios';
import { Text, AppRegistry, Button, StyleSheet, View, ActivityIndicator, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class LoginForm extends React.Component {
  
  constructor(props){
    super(props)
  }
  state = {
    placeName: '',
    places: [],
    persons: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };


  makeRequest = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(res.data);
      })
  }
  
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    });
  };

  render() {

    return (
      <View style={styles.container}>
         <Text style={styles.title}> Username</Text>
         <TextInput
            style={styles.input}
            value={this.state.placeName}
            placeholder='Username'
            onChangeText={this.placeNameChangeHandler}
          />
          <Text style={styles.title}> Password</Text>
           <TextInput
            placeholder='Password'
            style={styles.input}
          />
          <Button 
            title="Login"  
            onPress={() => this.props.navigation.navigate('Details')}
            style={styles.btnLogin} 
            color="black"/>
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
    color: 'white'
  }

});
