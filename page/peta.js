import React, { useEffect, useState } from 'react';
import MapView, { Callout, Marker, } from 'react-native-maps';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const Peta = () => {


  useEffect(() => {
    (async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMarkerCoordinates({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
  
      // Mulai mengambil lokasi secara periodik setiap 5 detik
      const locationInterval = setInterval(async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setMarkerCoordinates({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }, 5000);
  
      return () => {
        // Hentikan pengambilan lokasi secara periodik saat komponen di-unmount
        clearInterval(locationInterval);
      };
    })();
  }, []);
  
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -7.3110,
            longitude: 112.7286,
            latitudeDelta: 0.0500,
            longitudeDelta: 0.0500,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
        >
          <Marker
          coordinate={{
            latitude: -7.3177,
            longitude: 112.7269,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Prada Yasa Trans'
          description='Rental Mobil Surabaya Sidoarjo'
          />
          <Marker
          coordinate={{
            latitude: -7.3144,
            longitude: 112.7309,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Pesona Trans'
          description='Sewa Mobil Mewah'
          />
          <Marker
          coordinate={{
            latitude: -7.3147,
            longitude: 112.7321,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Artabuana Trans'
          description='Sewa Mobil Surabaya'
          />
          <Marker
          coordinate={{
            latitude: -7.3163,
            longitude: 112.7384,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Positive Car Rent'
          />
          <Marker
          coordinate={{
            latitude: -7.3196,
            longitude: 112.7402,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Rental Mobil Surabaya'
          description='Sewa Mobil Surabaya'
          />
          <Marker
          coordinate={{
            latitude: -7.3332,
            longitude: 112.7342,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Car Rental Surabaya'
          description='Sewa Mobil Surabaya'
          />
          <Marker
          coordinate={{
            latitude: -7.3390,
            longitude: 112.7180,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Royal Sultan'
          description='Sewa Mobil Surabaya'
          />
          <Marker
          coordinate={{
            latitude: -7.3035,
            longitude: 112.7302,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='CB Rent Car Surabaya'
          description='Sewa Mobil Surabaya'
          />
          <Marker
          coordinate={{
            latitude: -7.2921,
            longitude: 112.7255,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Asmoro Transportation'
          description='Sewa Mobil Surabaya'
          />
          <Marker
          coordinate={{
            latitude: -7.2862,
            longitude: 112.7440,
          }}
          image={require('../assets/cars-icon.png')} 
          style={{ width: 10, height: 10,}}
          title='Salsa Rent Car'
          description='Sewa Mobil Surabaya'
          />
        </MapView>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});

export default Peta;