import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import Article1 from './screens/Article1';
import Article2 from './screens/Article2';
import Article3 from './screens/Article3';
import ProfilePage from './screens/ProfilePage';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Article1:Article1,
  Article2:Article2,
  Article3:Article3,
  ProfilePage:ProfilePage,
  

});

const AppContainer = createAppContainer(AppNavigator);










