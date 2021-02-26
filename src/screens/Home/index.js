import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProsp = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProsp)(HomeScreen);

const styles = StyleSheet.create(style);

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
