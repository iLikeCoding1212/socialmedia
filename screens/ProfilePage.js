import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class Article3 extends Component {
    constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      
      
    };
  }
  render() {
    return (
      <View

      style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
      }}>

      <Text style={{fontSize:35}}>Your Profile</Text>
      
      <Image style={styles.imageIcon}source={require('../assets/profile-user.png')}/>

      <Text style={{fontSize:20}}> Customize Profile Picture</Text>

      <Text style={{fontSize:30}}>About Me:</Text>
      


      <Text style={{fontSize:20}}>Write About Me here...</Text>
                <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
      <Text style={{fontSize:25}}>Followers: 0</Text>
      <Text style={{fontSize:25}}>Following: 9</Text>

              <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
        
      </View>
    )}}

    const styles = StyleSheet.create({
  imageIcon: {
    width:100,
    height:100,
    marginLeft:110
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
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