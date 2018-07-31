/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AppleHealthKit from 'rn-apple-healthkit';

type Props = {};
export default class App extends Component<Props> {
  onPress = () => {
    const options = {
      permissions: {
        read: ['StepCount', 'Steps'],
      },
    };

    AppleHealthKit.initHealthKit(options, (error, result) => {
      if (error) {
        console.log('error', error);
      }

      if (result) {
        console.log('result', result);

        const d = new Date(2016,1,1);

        AppleHealthKit.getStepCount({ date: d.toISOString() }, (error2, result2) => {
          if (error2) {
            console.log('error2', error2);
          }

          if (result2) {
            console.log('result2', result2);
          }
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.welcome}>Tap to connect Apple HealthKit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
