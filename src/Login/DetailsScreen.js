import React from 'react';
import { AppRegistry, Button, StyleSheet, View, TextInput, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class DetailsScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Icon
          reverse
          name='plus'
          type='font-awesome'
          color='#f50' 
          onPress={() => Actions.formNote()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 20,
    height: 20,
    marginLeft: 290, 
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  }
});