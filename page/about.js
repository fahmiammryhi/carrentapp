import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Login from './login';
import Front from './splash';


const App = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          App description
          </Text>
        <Text style={styles.bodyText}>
          Car Rent is an application for car rental that allows users to easily find the nearest car rental in their location. 
          The app provides users with an interface to browse through a variety of car rental options, including make and model, 
          rental price, and available features. The app uses GPS data to display the closest rental locations to the user, 
          and allows them to compare prices and make a reservation with a few simple taps. The app also offers convenient features 
          like online payment options, real-time booking updates, and a 24/7 customer support line. With its ease of use and 
          comprehensive offerings, this car rental app provides a seamless experience for users seeking a quick and convenient 
          rental solution.
        </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Version:
        </Text>
        <Text style={styles.bodyText}>
          V0.0.1
        </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Created By:
        </Text>
        <Text style={styles.bodyText}>
          Fahmi Ammry H.I - 1202200052
        </Text>
        <Text style={styles.bodyText}>
          Ilyas Kurniawan Y - 1202202085
        </Text>
      </View>
      <View style={styles.bttnstyle}>
        <Button
          color="0000"
          title="Keluar"
          onPress={() => props.navigation.navigate("Login")}  
           />
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 35,
    backgroundColor: '#fff',
    marginBottom: 0.5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    padding: 35,
    backgroundColor: '#fff',
  },
  bodyText: {
    fontSize: 14,
    textAlign: 'justify',
  },
  bttnstyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginLeft: 100,
    marginRight: 100,
  }
});

export default App;
