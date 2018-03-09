import React, { Component } from 'react';
import ItineraryList from './ItineraryList.js';
import { Platform, StyleSheet, Text, StatusBar, Button,
        View, TextInput, TouchableOpacity, ListView, Animated } from 'react-native';



export default class Itinerary extends Component {

  static navigationOptions = {
    title: 'Itinerary',
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
    <View style={styles.itinerarycontainer}>
    
    <TextInput
    placeholder="email"
    placeholderTextColor="rgba(225,225,225,0.7)"
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    returnKeyType="next"
    style={styles.input}
    onSubmitEditing={() => this.passwordInput.focus()} />
    </View>
    )
  }
}

const styles = StyleSheet.create({
    itinerarycontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#1da6cf',
    },
    input: {
      paddingVertical: 15,
      width: 300,
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      color: 'white',
      paddingHorizontal: 10,
      fontWeight: 'bold',
    },
})
