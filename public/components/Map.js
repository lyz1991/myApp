import MapView from 'react-native-maps'
import React from 'react'
import {
  StyleSheet,
  Dimensions
} from 'react-native';
export default () => (
  <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} style={styles.map}></MapView>
)
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})