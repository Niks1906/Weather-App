import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Componentt {
  constructor() {
    super();
    this.state = { weather: "" };
  }

  getWeather = () => {
    var url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
    return fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({ weather: responseJSON });
      })
      .catch((error) => {console.log(error)});
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Open up App.js to start working on your app! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
