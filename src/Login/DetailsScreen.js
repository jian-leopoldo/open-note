import React from 'react';
import { AppRegistry, StyleSheet, View, TextInput, Text, Image } from 'react-native';
import { Icon, Card, ListItem, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'Jian',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
 ]

export default class DetailsScreen extends React.Component {
  
  render() {
    return (
      <View>
        <View style={styles.button}>
          <Card title="CARD WITH DIVIDER">
            {
              users.map((u, i) => {
                return (
                  <View key={i} >
                    <Image
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <Text >{u.name}</Text>
                  </View>
                );
              })
            }
          </Card>
        </View>
        <View>
          <Button 
            title='Adicionar note'
            backgroundColor='#f50'
            style={styles.button}
            onPress={() => Actions.formNote()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  btnContainer: {
    flex: 1,
    width: 20,
    height: 20,
    marginLeft: 290, 
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: 20
  }
});