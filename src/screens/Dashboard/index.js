import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PropTypes from "prop-types";

const DashboardScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DashboardScreen;

DashboardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
