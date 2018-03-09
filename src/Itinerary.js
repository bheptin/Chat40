import React, { Component } from 'react';
import ItineraryList from './ItineraryList.js';
import { Platform, StyleSheet, Text, StatusBar, Button,
        View, TextInput, CheckBox, ListItem, TouchableOpacity, ListView, Animated } from 'react-native';



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
      <Text style={styles.itineraryText}>Here is a list of things we have planned,
       check the ones you want to attend, enter your name and submit</Text>
        
      <View >
        <TextInput
        placeholder="Name"
        placeholderTextColor="rgba(225,225,225,0.7)"
        keyboardType="email-address"
        autoCorrect={false}
        returnKeyType="next"
        style={styles.input}
        onSubmitEditing={() => this.passwordInput.focus()} />
        
        <TouchableOpacity
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
    itineraryText: {
      flex: 1,
      padding: 4,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
    input: {
      paddingVertical: 15,
      width: 350,
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      color: 'white',
      paddingHorizontal: 10,
      fontWeight: 'bold',
    },
    buttonContainer: {
      backgroundColor: '#2980b9',
      paddingVertical: 15,
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700',
    },
})
