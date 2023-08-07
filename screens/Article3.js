import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Article3 extends Component {
  render() {
    return (
      <View

      style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style={{fontSize:20}}>Article 3</Text>
      <Text style={{fontSize:15}}>Cleaning Services are now OPEN!</Text>

      <Text>Do you need your house to be cleaned? Call 555-888-2723 to call our house cleaning services. Our team consists of many professionals who have been working for years in our company.</Text>

      <Text style={{fontSize:15}}>Payment: $50-$100 per room</Text>

                <Image style={styles.imageIcon}source={require('../assets/download.jpg')}/>

                                <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width:200,
    height:170,
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