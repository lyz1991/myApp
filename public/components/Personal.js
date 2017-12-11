import React, { Component } from 'react';
import { observable } from 'mobx'
import { inject, observer} from 'mobx-react'
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions
} from 'react-native';
const User = (props) => (
  <View>
    <Text style={styles.item}>姓名:{props.name}</Text>
    <Text style={styles.item}>出生:{props.birth}</Text>
    <Text style={styles.item}>学历:{props.edu}</Text>
    <Text style={styles.item}>学校:{props.collodge}</Text>
    <View style={[styles.item, styles.raw]}>
      <Text>现居地址:</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Map')
        }}>
      <Text style={ styles.link }>{props.address}
      </Text>
    </TouchableOpacity>
    </View>
    <View style={[styles.item, styles.raw]} >
      <Text>联系电话:</Text>
      <TouchableOpacity onPress={() => {
        Linking.canOpenURL(`tel:${props.tel}`).then(support => {
          if (!support) {
            Alert.alert("The device don't support the linking")
          } else {
            Linking.openURL(`tel:${props.tel}`)
          }
        })

      }}>
      <Text style={[styles.link, styles.raw]}>{props.tel}</Text>
    </TouchableOpacity>
    </View>

  </View>
)
export default inject(({user}) => ({
  name: user.user.name,
  birth: user.user.birth,
  edu: user.user.edu,
  collodge: user.user.collodge,
  tel: user.user.phone,
  address: user.user.address
}))(User)
const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width,
    marginBottom: 10,
    justifyContent:'flex-start'
  },
  link: {
    color: 'blue'
  },
  raw: {
    flexDirection: 'row'
  }
})