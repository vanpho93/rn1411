import React, { Component } from 'react';
import SignIn from './src/components/SignIn';
import LoadMoreList from './src/components/LoadMoreList';
import GoPlay from './src/components/GoPlay';
import { StackNavigator } from 'react-navigation';

const Stack = StackNavigator({
  LoadMoreList: { screen: LoadMoreList },
  SignIn: { screen: SignIn },
  GoPlay: { screen: GoPlay, path: 'goplay/:author/:content' },
}, { headerMode: 'none' });

export default class App extends Component {
  render() {
    return <Stack />;
  }
}
