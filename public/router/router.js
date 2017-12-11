import { StackNavigator } from 'react-navigation'
import Person from '../components/Personal'
import Map from '../components/Map'
import React from 'react'
const App = StackNavigator({
  Home: {
    screen: Person,
    navigationOptions: {
      headerTitle: 'Home',
      headerBackTitle: null,
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      headerTitle: 'Map',
      headerTruncatedBackTitle: ''
    }
  }
}, {
  initialRouteName: 'Home'
})
export default () => <App/>
