import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import style from "./styles";
import PropTypes from "prop-types";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

const styles = StyleSheet.create(style);

export default HomeScreen;

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
