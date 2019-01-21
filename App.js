/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Svg from "react-native-svg";
import { VictoryArea as AreaChart } from "victory-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Svg width="400" height="400">
          <AreaChart
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            height={400}
            width={400}
            standalone={false}
            domainPadding={{
              y: 0,
              x: 0
            }}
            data={[
              { x: 0, y: 10 },
              { x: 10, y: 20 },
              { x: 20, y: 30 },
              { x: 30, y: 40 },
              { x: 40, y: 50 },
              { x: 50, y: 45 },
              { x: 60, y: 20 },
              { x: 70, y: 50 },
              { x: 80, y: 5 },
              { x: 90, y: 123 }
            ]}
            padding={0}
            style={{
              data: {
                stroke: "red",
                strokeWidth: 2,
                fill: "red",
                fillOpacity: 0.4
              }
            }}
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
