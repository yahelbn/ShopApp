import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey from "Settings" page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
