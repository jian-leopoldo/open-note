import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, ActivityIndicator, TextInput } from 'react-native';

export default class App extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
          />
           <TextInput
            style={styles.input}
          />
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
    backgroundColor:'white',
    marginBottom: 20
  }

});
