import React, { useState } from 'react';
import 'firebase/firestore';
import { View, StyleSheet, Text, Button, Alert, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";
import firebase from '../database/firebase';
import Dashboard from './dashboard';


Transaksi = ({ navigation }) => {

  const [renter, setrenter] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [car, setcar] = useState('');
  const [error, setError] = useState('');

  const data = [
    { label: 'Cash', value: '1' },
    { label: 'BCA Mobile', value: '2' },
    { label: 'BRI Mobile', value: '3' },
    { label: 'Dana', value: '4' },
    { label: 'OVO', value: '5' },
    { label: 'Gopay', value: '6' },
  ];


  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Payment"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    );
  };

  const handleBook = () => {
    //cek email pada database
    const db = firebase.firestore();
    db.collection('book')
      .where('renter', '==', renter)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          Alert.alert('Enter details to book !');
          return;
        }
        //jika email belum terdaftar, add data
        db.collection('book')
          .add({
            renter,
            phone,
            address,
            car,
          })
          .then(() => {
            //jika Book berhasil maka masuk halaman Dashboard
            navigation.navigate('Peta')
          })
          //jika gagal add data akan muncul error
          .catch((error) => {
            setError(error.message);
          })
      })
      .catch((error) => {
        //jika mengambil data gagal, akan tampil error
        setError(error.message);
      })

    // const DropdownComponent = () => {
    //   const [value, setValue] = useState(null);
    // };

  };


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logoppb.png')} alt="logoBook" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={renter}
        onChangeText={setrenter}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Phone"
        value={phone}
        onChangeText={setphone}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Address"
        value={address}
        onChangeText={setaddress}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Car"
        value={car}
        onChangeText={setcar}
      />
      <DropdownComponent />
      <Button
        color="#363636"
        title="Book Now"
        onPress={handleBook}
      />
      {/* <DropdownComponent /> */}

      {error ? <Text>{error}</Text> : null}


    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#363636',
    marginTop: 25,
    textAlign: 'center'
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 8,
    alignSelf: "center",
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  }
});

export default Transaksi;