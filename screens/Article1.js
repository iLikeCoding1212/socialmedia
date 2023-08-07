import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Article1 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 30 }}>How to Cook Eggs</Text>

        <Text style={{ fontSize: 20 }}>Ingredients / Materials needed:</Text>

        <Text>1 egg, 1 pan, salt, pepper</Text>

        <Text style={{ fontSize: 20 }}>Step 1:</Text>

        <Text>Crack one egg into a frying pan.</Text>

        <Text style={{ fontSize: 20 }}>Step 2:</Text>

        <Text>Cook the egg on low - medium heat until the egg white sets.</Text>

        <Text style={{ fontSize: 20 }}>Step 3:</Text>

        <Text>
          Take out the egg right before they are done cooking and put them on a
          plate.
        </Text>

        <Text style={{ fontSize: 20 }}>Step 4:</Text>

        <Text>Season the egg to your liking.</Text>

        <Image
          style={styles.imageIcon}
          source={require('../assets/how-to-fry-an-egg-3-1200.jpg')}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 115,
    height: 115,
    marginLeft: 110,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
});
