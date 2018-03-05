import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, StatusBar,
        View, TextInput, TouchableOpacity } from 'react-native';
import GoBackButton from './GoBackButton.js';

  export default class LoginForm extends Component {
    render() {
      return(
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <GoBackButton />
          <TextInput
          placeholder="email"
          placeholderTextColor="rgba(225,225,225,0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()} />

          <TextInput
          placeholder="password"
          placeholderTextColor="rgba(225,225,225,0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input} />

          <TouchableOpacity
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      color: 'white',
      paddingHorizontal: 10,
      fontWeight: 'bold',
    },
    buttonContainer: {
      backgroundColor: '#2980b9',
      paddingVertical: 15,
    },
    backButton: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700',
    },
  })
