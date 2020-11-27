import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  Alert,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import * as Location from 'expo-location';
// import RNLocation from 'react-native-location';
import Geolocation from '@react-native-community/geolocation';
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
  getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const dataCord = {
          longitude: currentLongitude,
          latitude: currentLatitude,
        };
        this.setState({dataCord});
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change

        console.log(position);

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  componentDidMount() {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        this.getOneTimeLocation();
        this.subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            this.getOneTimeLocation();
          } else {
            alert('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
  }

  updateState = async (location) => {
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      longitudeDelta: 0.045,
      latitudeDelta: 0.045,
    };
    this.setState({region});

    // try {
    //   // let loocation = await Location.geocodeAsync('JCCI GLORY TABERNACLE');

    //   loocation.map((item) => {
    //     let dataCord = {
    //       latitude: item.latitude,
    //       longitude: item.longitude,
    //     };
    //     this.setState({dataCord});
    //   });

    //   console.log(this.state.dataCord.latitude);
    // } catch (error) {
    //   console.log(error);
    // }
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
        <CurrentLocationButton open={this.props.side} />
        {/* <MapView
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
        </MapView> */}
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
