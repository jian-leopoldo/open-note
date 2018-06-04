import React from 'react';
import { 
  AppRegistry,
  List, 
  ListItem, 
  StyleSheet, 
  View, 
  TextInput, 
  Text, 
  Image, 
  FlatList,
  ScrollView,
  ActivityIndicator
 } from 'react-native';
import { Icon, Card, Button  } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";

export default class DetailsScreen extends React.Component {

  state = {
     dataSource: [],
     loadingBar: true
  };

  constructor(props){
    super(props)
  }
  
  componentWillMount(){

  }
  componentDidMount(){
    this.makeRequest();
  }

  makeRequest = () => {
    var details = firebase.database().ref("/user/details");
    details.on('value', (snapshot) => {
      var items = [];
      snapshot.forEach((child) => {
        items.push({
          title: child.val().title,
          description: child.val().description,
          _key: child.key
        });
      });

      this.setState({
        dataSource: items,
        loadingBar: false
      });

      
      
    });
   
  }

  showLoadingBar(){
    if (this.state.loadingBar) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    
  }
  
  render() {
    return (
      <ScrollView> 
        <View style={styles.button}>
          {
                this.state.dataSource.map((u, i) => {
                return (

                  <Card title={u.title} key={u._key}>
                    <View key={u._key} >
                      <Image
                        resizeMode="cover"
                        source={{ uri: u._key }}
                      />
                      <Text  key={u._key}>{u.description}</Text>
                    </View>
                  </Card>

                );
              })
          }
          </View>
          <View>
            {
              this.showLoadingBar()
            }
        </View>
      </ScrollView>
      
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
    paddingTop: 20
  }
});