import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard Screen</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DashboardScreen;
