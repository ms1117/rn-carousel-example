/**
 * @format
 */

import { AppRegistry, StatusBar, YellowBox } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';

StatusBar.setBarStyle('light-content', false);
AppRegistry.registerComponent(appName, () => App);

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps is deprecated',
]);