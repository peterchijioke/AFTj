import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import {Icon} from 'native-base';
import CurrentLocationButton from './CurrentLocationButton';

const {height, width} = Dimensions.get('window');

// @inject("store")
// @observer
export default class GoogleMap extends Component {
  state = {
    region: null,
    statusState: null,
    dataCord: '',
  };

  // updateState(location) {
  //   this.setState({
  //     ...this.state,
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //   });
  // }

  async componentDidMount() {
    try {
      let {status} = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      this.updateState(location);
    } catch (error) {
      console.log(error);
    }
    this.forceUpdate();
  }

  updateState = async (location) => {
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      longitudeDelta: 0.045,
      latitudeDelta: 0.045,
    };
    this.setState({region});

    try {
      let location = await Location.geocodeAsync('JCCI GLORY TABERNACLE');

      location.map((item) => {
        let dataCord = {
          latitude: item.latitude,
          longitude: item.longitude,
        };
        this.setState({dataCord});
      });

      console.log(this.state.dataCord.latitude);
    } catch (error) {
      console.log(error);
    }
  };

  centerMap = () => {
    const {
      latitude,
      longitude,
      longitudeDelta,
      latitudeDelta,
    } = this.state.region;

    this.map.animateToRegion({
      useNativeDriver: true,
      latitude,
      longitude,
      longitudeDelta,
      latitudeDelta,
    });
  };
  render() {
    return (
      <View style={styles.mapView}>
        <CurrentLocationButton
          open={this.props.side}
          cb={() => {
            this.centerMap();
          }}
        />
        <MapView
          // showsUserLocation
          initialRegion={this.state.region}
          // showsMyLocationButton
          // initialRegion={{
          // latitude: 38.945647676897536,
          // longitude: -76.93186930015136,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={styles.maping}>
          {this.state.dataCord != '' ? (
            <Marker
              coordinate={this.state.dataCord}
              title={'title'}
              description={'description'}
            />
          ) : (
            <Marker
              coordinate={{
                latitude: 33.8745141,
                longitude: -84.63975789999999,
              }}
              title={'title'}
              description={'description'}
            />
          )}
        </MapView>
      </View>
    );
  }
}

// 38.945337379568294, -76.93273533655675;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,

    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
    height: 200,
    // marginTop: ,
  },
  maping: {
    ...StyleSheet.absoluteFillObject,
  },
  iconArrow: {
    zIndex: 2,
    position: 'absolute',
    shadowRadius: 5,
    left: 15,
    top: 10,
    // justifyContent: "space-around",
    // alignItems: "center",
  },
});
