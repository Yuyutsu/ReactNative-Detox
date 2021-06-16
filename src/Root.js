import React from 'react';
import {LogBox, Text} from 'react-native';

import App from './App';

LogBox.ignoreAllLogs(true);

class Root extends React.Component {
  constructor(props) {
    super(props);
    if (Text.defaultProps == null) {
      Text.defaultProps = {};
    }
    Text.defaultProps.maxFontSizeMultiplier = 1;
  }

  render() {
    return <App />;
  }
}

export default Root;
