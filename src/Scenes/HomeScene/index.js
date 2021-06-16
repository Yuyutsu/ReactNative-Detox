import React from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import {style} from './style';

export default class HomeScene extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  logoutAction = () => {
    const {navigation} = this.props;

    navigation.replace('LoginScene');
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.subContainer}>
          <Text style={style.poweredByText} testID={'welcome-to-home'}>
            Welcome to Home
          </Text>
          <View style={style.loginbtn}>
            <TouchableOpacity onPress={this.logoutAction} testID={'logout-btn'}>
              <Text style={style.text}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
