/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Router from './public/router/router'
import user from './public/store/index'
import { Provider } from 'mobx-react'
import {
  StyleSheet,
  Button,
  View
} from 'react-native';

export default class App extends Component<{}> {
  constructor () {
    super()
  }
  componentWillMount () {
  }
  componentDidMount () {
  }
  render() {
    return (
      <Provider {...user}>
         <Router/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width:300,
    height:400
  }
});
