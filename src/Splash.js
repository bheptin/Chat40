import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

export default class Splash extends Component {
  static navigationOptions = {
    title: 'Splash',
    headerStyle: {
      backgroundColor: '#778ca3',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Chalkboard SE',
    }
  };
    render() {
        return (
          <View style={styles.wrapper}>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Chat40</Text>
            </View>
            <Button
              title="Home"
              onPress={() => this.props.navigation.navigate('HomeScreen')} />
              <Text style={styles.subtitle}>For the life of the party</Text>
          </View>
        )
    }
  }

const styles = StyleSheet.create ({
  wrapper: {
    backgroundColor: '#1da6cf',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
  },
  titleWrap: {
    justifyContent: 'center',
    flex: 1,
  },
  subtitle: {
    color: '#EFE0E0',
    paddingBottom: 20,
    fontSize: 20,
  },
});
