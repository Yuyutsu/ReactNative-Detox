import React from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import {style} from './style';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class LoginScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {}

  loginAction = () => {
    const {navigation} = this.props;

    navigation.replace('HomeScene');
  };

  render() {
    return (
      <SafeAreaView
        style={style.container}
        edges={['right', 'bottom', 'left']}
        testID={'login-screen'}>
        <StatusBar barStyle="light-content" />
        <View style={style.subContainer}>
          <View
            style={[style.rowTextContainer, {marginTop: 15, marginBottom: 15}]}>
            <TextInput
              testID={'username-input'}
              adjustsFontSizeToFit
              numberOfLines={1}
              value={this.state.username}
              placeholder={'username'}
              onChange={val => {
                this.setState({username: val});
              }}
              style={style.textInput}
            />
            <TextInput
              testID={'password-input'}
              adjustsFontSizeToFit
              numberOfLines={1}
              value={this.state.password}
              onChange={val => {
                this.setState({password: val});
              }}
              placeholder={'password'}
              style={style.textInput}
            />
          </View>
          <View style={style.loginbtn}>
            <TouchableOpacity onPress={this.loginAction} testID={'login-btn'}>
              <Text style={style.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
