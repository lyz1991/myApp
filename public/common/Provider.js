import React, { Component, Children } from 'react';
const PropTypes = require('prop-types');
import store from '../store/store'
export default class Provider extends Component {
  getChildContext() {
    return {store: store};
  }
  constructor(props, context) {
    super(props, context)
  }
  render () {
    return Children.only(this.props.children)
  }
}
Provider.childContextTypes = {
  store: PropTypes.object
}