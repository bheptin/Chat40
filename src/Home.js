import React, { Component } from 'react';
import { Platform, StyleSheet, Text, StatusBar, Button,
        View, TextInput, TouchableOpacity } from 'react-native';


      export default class Home extends Component {
        render () {
          return(
            <View style={styles.container}>
              <Text>Welcome to the Party! Here you can find the schedule
                    for the weekend, Find out whose coming, and what the 
                    weather will be like!</Text>
              <Button title="Things to do"></Button>
            </View>
          )
        }
      }
      const styles = StyleSheet.create({
        container: {
          flex: 0,
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
        
          backgroundColor: 'steelblue',
        },
      })