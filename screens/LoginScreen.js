import React, { PureComponent } from "react";
import { View, StyleSheet, Button } from "react-native";

class LoginScreen extends PureComponent {
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        //androidClientId: YOUR_CLIENT_ID_HERE,
        behavior: "web",
        iosClientId: `716024426357-r274icfp9obnfo01iq3rp7448vovain1.apps.googleusercontent.com`,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="sign In with Google"
          onPress={() => this.signInWithGoogleAsync()}
        />
      </View>
    );
  }
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#246",
    alignItems: "center",
    justifyContent: "center",
  },
});
