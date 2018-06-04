import React from 'react';
import { Text, CameraRoll, Image, AppRegistry, StyleSheet, View, ScrollView, PermissionsAndroid} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Camera, Permissions } from 'expo';

export default class uploadImage extends React.Component {
  state = {
    photos: [],
    loadingBar: true,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
 };

  constructor(props){
    super(props)
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

 
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         console.log(err.toString());
      });
    };
  render() {
    return (
      <View>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
          console.log(p.node.image.uri);
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
