import React, { Component } from 'react';
import { Platform, StyleSheet, Text, StatusBar, Button,
        View, TextInput, TouchableOpacity, Image } from 'react-native';


export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#778ca3',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Apple Color Emoji',
    }
  };
  
  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Party! Here you can find the schedule
              for the weekend, Find out whose coming, and what the 
              weather will be like!</Text>
        <Button title="Itinerary"
        onPress={() => this.props.navigation.navigate('ItineraryScreen')} />
        <Button title="Weather"
        onPress={() => this.props.navigation.navigate('WeatherScreen')} />
        <Image source={require('./images/BillyWedding.jpg')} style={{width:200, height: 100, alignItems: 'center', flex: .8 }}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1da6cf',
  },
  welcome: {
    color: 'white',
  },
})