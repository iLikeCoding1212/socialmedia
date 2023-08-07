import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Article1 from '../screens/Article1';
import Article2 from '../screens/Article2';
import Article3 from '../screens/Article3';
import ProfilePage from '../screens/ProfilePage';



export default class App extends React.Component {
render() {
  return(
    
  <View style={styles.container}>

<Header
backgroundColor={'#ff0066'}
centerComponent={{
  text: 'Social Media App',
  style: {color: '#ffff', fontSize: 20},
}}
/>

<Header
backgroundColor={'indigo'}
centerComponent={{
  text: 'You are logged in as [Username]',
  style: {color: '#ffff', fontSize: 10},
}}
/>


<Image
style={styles.imageIcon}
source={require("../assets/social-media.png")}
/>

<Text>
This is a social media app where people can post things of many topics and others can like the posts.
</Text>

<TouchableOpacity
style = {styles.profile}
onPress = {()=>{
  this.props.navigation.navigate("ProfilePage")
}}>

<Text>
Your Profile
</Text>
</TouchableOpacity>

<TouchableOpacity
style = {styles.button}
onPress = {()=>{
  this.props.navigation.navigate("Article1")
}}
>

<Text>
How to Cook Eggs (Vlog)
</Text>
</TouchableOpacity>

<TouchableOpacity
style = {styles.button}
onPress = {()=>{
  this.props.navigation.navigate("Article2")
}}
>

<Text>
My Day at the Beach (Vlog)
</Text>
</TouchableOpacity>

<TouchableOpacity
style = {styles.button}
onPress = {()=>{
  this.props.navigation.navigate("Article3")
}}>

<Text>
Cleaning Service (Advertisement)
</Text>
</TouchableOpacity>



<Text >Connect Your Socials:</Text>
<Image
style={styles.socialMediaIcon}
source={require("../assets/youtube.png")}
/>

<Image
style={styles.socialMediaIcon}
source={require("../assets/twitter.png")}
/>

<Image
style={styles.socialMediaIcon}
source={require("../assets/instagram.png")}
/>
  
</View>
)
}
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },

  imageIcon: {
    width:115,
    height:115,
    marginLeft:110
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 30
  },

    profile: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 30
  },

  socialMediaIcon: {
    width:48,
    height:48,
    marginRight:110
  }
})









