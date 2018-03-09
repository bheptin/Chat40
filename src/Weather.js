import React, { Component } from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, StatusBar, Button, Image,
        View, TextInput, TouchableOpacity, Dimensions } from 'react-native';


const API_KEY = "4a413b11af3afb22";
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
    var request_url = "https://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + zipcode + ".json";
    axios.get(request_url)
    .then( (response) => {
      if ( response.status == 200 ) {
        console.log(response.data);
        var weather = response.data.forecast.simpleforecast.forecastday;
        var forecast = [];
        weather.forEach( (element, index) => {
          forecast = forecast.concat([
            { date: element.date.weekday,
              temperature:
                { high:
                  { fahrenheit: element.high.fahrenheit,
                    celsius: element.high.celsius
                  },
                  low:
                  { fahrenheit: element.low.fahrenheit,
                    celsius: element.low.celsius
                  }
                },
                conditions: element.conditions,
                wind:
                { mph: element.avewind.mph,
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
              <View key={index} style={styles.weatherMap}>
                <Image style={{width: 30, height: 30}}
                  source={{uri: element.icon_url}} />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1da6cf',
  },
  weatherMap: {
    marginTop: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.25,
  }
});
