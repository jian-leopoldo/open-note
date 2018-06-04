import React from 'react';
import { Text, CameraRoll, Image, AppRegistry, StyleSheet, View, ScrollView} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


export default class uploadImage extends React.Component {
  state = {
    photos: [],
    loadingBar: true
 };
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
      });
    };
  render() {
    return (
      <View>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
          return (
            <Image
              key={i}
              style={{
                width: 300,
                height: 100,
              }}
              source={{ uri: p.node.image.uri }}
            />
          );
        })}
        </ScrollView>
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
