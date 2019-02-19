import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

class ImageButton extends React.Component{

  changeColor(){

  }
    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.touchable}  onPress={() => {
                  Alert.alert('Nice!');
              }}>
                  <View>
                      <Text style={styles.text}>Click me!</Text>
                  </View>
                  <Image source={require('./assets/react.png')}/>
              </TouchableOpacity>
            </View>
        )
    }
}


export default class App extends React.Component {

  render() {
    return (
      <ImageButton/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        height: '100%',
    },
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    }
});




