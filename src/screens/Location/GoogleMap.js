import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import CurrentLocationButton from './CurrentLocationButton';

const {height, width} = Dimensions.get('window');

export default function GoogleMap({side}) {
  const [GrantedPermission, setGrantedPermission] = useState(false);
  const [cord, setCord] = useState();
  useEffect(() => {
    const requestLocationPermission = async () => {
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
          setGrantedPermission(true);
          getOneTimeLocation();
        } else {
          alert('Permission Denied');
        }
      } catch (err) {
        alert('err', err);
      }
    };
    requestLocationPermission();
  }, [GrantedPermission]);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const dataCord = {
          longitude: currentLongitude,
          latitude: currentLatitude,
        };
        setCord(dataCord);
        console.log(cord);
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

  return (
    <View style={styles.mapView}>
      <CurrentLocationButton open={side} />
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
      <MapView
        showsUserLocation
        showsCompass
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        zoomEnabled
        style={styles.maping}
      />
    </View>
  );
}

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
