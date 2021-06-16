/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import NavStack from './NavStack';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
  },
  image: {
    alignSelf: 'center',
    width: 76,
    height: 76,
    borderRadius: 38,
  },
});
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <NavStack />;
  }
}
