import React, { Component } from "react";
import { connect } from "react-redux";

import { StyleSheet, Text, View, Button } from "react-native";

import style from "./styles";
import PropTypes from "prop-types";

class HomeScreen extends Component {
  handleNavigation(to) {
    this.props.navigation.navigate(to);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.handleNavigation("Dashboard")}
        />
      </View>
    );
  }
}

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
