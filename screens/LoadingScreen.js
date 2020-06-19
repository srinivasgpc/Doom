import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import firebase from "firebase";
class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          this.props.navigation.navigate("DashboardScreen");
        } else {
          this.props.navigation.navigate("LoginScreen");
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;
