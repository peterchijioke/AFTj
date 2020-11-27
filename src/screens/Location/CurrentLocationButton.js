import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class CurrentLocationButton extends Component {
  render() {
    const {open} = this.props;
    return (
      <View style={[styles.container, {top: HEIGHT - 100}]}>
        <SimpleLineIcons
          name="arrow-left"
          color="#fff"
          size={20}
          onPress={open}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#000',
    left: WIDTH - 45,
    // borderRadius: 50,
    // shadowRadius: ,
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
