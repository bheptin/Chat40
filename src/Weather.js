import React, { Component } from 'react';
import { Platform, StyleSheet, Text, StatusBar, Button, Image,
        View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';

const API_KEY= "4a413b11af3afb22";
const DEFAULT_ZIPCODE = 28803;

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      zipcode: DEFAULT_ZIPCODE,
      days: [],
    }
  }
  _getForecast(zipcode) {
    const request_url = "http://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + zipcode + ".json";
    axios.get(request_url).then( (response) => {
      if (response == 200) {
        console.log(response);
        const weather = response.data.forecast.simpleforecast.forecastday;
        const forecast = [];
        weather.forEach( (element, index) => {
          //forecast is equal to a new forecast as an array being iterated over
          //to create a new array of keys and values. Loads one time instead
          //of 4 seperate times, one for current day and one for next 3 days
          forecast = forecast.concat([
            {
              date: element.date.weekday,
              temperature:
                {
                  high:
                  {
                    fahrenheit: element.high.fahrenheit,
                    celsius: element.low.celsius
                  }
                },
                conditions: element.conditions,
                wind:
                {
                  mph: element.avewind.mph,
                  dir: element.avewind.dir
                },
                average_humidity: element.avehumidity,
                icon_url: element.icon_url
            }
          ]);
        });
        this.setState({days: forecast});
      }
    }).catch( (error) => {
      console.log(error);
    });
  }

render () {
  if (this.state.days.length <= 0 ) {
      this._getForecast(this.state.zipcode);
    }

    return(
      <View style={styles.container}>
        {
          this.state.days.map( (element, index) => {
            return (
              <View key={index} style={{marginTop: 10, borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: Dimensions.get('window').width / 1.25}}>
                <Image style={{width: 50, height: 50}}
                  source={{url: element.icon_url}} />
                  <Text>{element.conditions}</Text>
                  <Text>High{element.temperature.high.fahrenheit}F | {element.temperature.high.celsius}C</Text>
                  <Text>Low{element.temperature.low.fahrenheit}F | {element.temperature.low.celsius}C</Text>
                  <Text>Wind: {element.wind.dir} @ {element.wind.mph} MPH</Text>
                  <Text style={{fontWeight: "900"}}>{element.date}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1da6cf',
  }
})
