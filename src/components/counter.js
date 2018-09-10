import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={styles.text}> {this.props.counterValue} </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    counterValue: state.counter.count
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect( mapStateToProps, mapDispatchToProps) (CounterComponent);

// STYLES
const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    fontSize: 30,
    color: "blue",
    margin: 20
  }
});
