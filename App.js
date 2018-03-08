import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Splash from './src/Splash.js';
import LoginForm from './src/LoginForm.js';
import Login from './src/Login.js';
import Home from './src/Home.js';
import Itinerary from './src/Itinerary.js';
import Weather from './src/Weather.js';


type Props = {};

  const Routes = StackNavigator({
    Splash: {
      screen: Splash, 
    },
    HomeScreen: {
      screen: Home,
    },
    ItineraryScreen: {
      screen: Itinerary,
    },
    WeatherScreen: {
      screen: Weather, 
    },
      initialRouteName: 'Splash',
  });


export default class App extends Component<Props> {
  render() {
    return (
      <Routes />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
