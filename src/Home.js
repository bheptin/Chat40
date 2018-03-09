import React, { Component } from 'react';
import { Platform, StyleSheet, Text, StatusBar, Button,
        View, TextInput, TouchableOpacity, Image } from 'react-native';


export default class Home extends Component {
  static navigationOptions = {
    header: null
  }
  
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
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1da6cf',
  },
  welcome: {
    color: 'white',
  },
})