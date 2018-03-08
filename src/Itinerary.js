import React, { Component } from 'react';
import ItineraryList from './ItineraryList.js';
import { Platform, StyleSheet, Text, StatusBar, Button,
        View, TextInput, TouchableOpacity, ListView, Animated } from 'react-native';



export default class Itinerary extends Component {
  
  
  render () {
    return(
    <View style={styles.itinerarycontainer}>
    
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
})
