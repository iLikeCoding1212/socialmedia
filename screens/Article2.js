import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Article2 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        
        <Text style={{ fontSize: 20 }}>My Day at the Beach</Text>
        <Text style={{fontSize: 15}}>By: Annonymous on June 17, 2005</Text>

        <Text>My day at the beach a few years ago was very fun and exciting. I went stayed there for 2 days and 1 night with my family. It was very hot during the day, and it was very refreshing to cool off in the cold waves. For lunch, I ate burgers and fries. They were very tasty. After a few hours at the beach, I went to the Amuesment Park in the same city and I went on roller coasters and a ferris wheel.</Text>

          <Image style={styles.imageIcon}
          source={require('../assets/7efae7f6dce13596b70641cc2b274431.jpg')}
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
    width:300,
    height:150,
    marginLeft:110
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
})