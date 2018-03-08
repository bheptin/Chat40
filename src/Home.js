import React, { Component } from 'react';
import { Platform, StyleSheet, Text, StatusBar, Button,
        View, TextInput, TouchableOpacity } from 'react-native';


export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#778ca3',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Chalkboard SE',
    }
  };
  
  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Party! Here you can find the schedule
              for the weekend, Find out whose coming, and what the 
              weather will be like!</Text>
        <Button title="Things to do"
        onPress={() => this.props.navigation.navigate('ToDoScreen')} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1da6cf',
  },
  welcome: {
    color: 'white',
  },
})