import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';


export default class GoBackButton extends Component {
  render () {
    return(
      <Button title="Go Back" onPress={() => this.props.navigation.goBack()} />
    )
  }
}
