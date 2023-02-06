import { useNavigation } from '@react-navigation/core'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, ScrollView, Alert, TouchableHighlight, TouchableOpacity } from 'react-native'
import 'firebase/firestore';
import firebase from '../database/firebase'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../database/firebase"




//const handleCrud = () => {
  //const db = firebase.firestore();
  //db.collection('book')
  //.add({
    //renter,
    //phone,
    //address,
    //car
    //})
    //.then(() => {
        //Alert.alert("Data Berhasil Disimpan")
    //})
    //.catch((error) => {
        //setError(error.message);
  //})
//}





const Fetch = ({navigation}) => {
  
  const [book, setbook] = useState([]);
  const [idRent, setIdRent] = useState([]);

  const deleteDoc = async (idRent) => {
    const firestore = firebase.firestore();
    try {
        await firestore.collection("book").doc(idRent).delete();
        console.log("Document successfully deleted!");
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}
  const deletedata = useCallback((rent) => {
    
    Alert.alert(
      "Cancel Rent",
      "Do You Want To Cancel This Rent ?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: async () => {
            await deleteDoc(rent.id)
            console.log("Data Deleted");
            Alert.alert("Rent Canceled!");
            // Perform any additional actions here, such as navigating to a different screen
            navigation.replace("Peta");
        }
        }
      ],
      { cancelable: false }
    );
  })

  const updateData = useCallback((rent) => {
    navigation.navigate("Update", {rent});
  })
  
  // const updateData = (() => {
  //   navigation.navigate(Update);
  // })

  useEffect(() => {
    // const unsubscribe = firebase.firestore().collection('book').get().then((querySnapshot) => {
      const unsubscribe = firebase.firestore().collection('book').onSnapshot((querySnapshot) => {

      const updatedbook = [];
      querySnapshot.forEach((doc) => {
        updatedbook.push({
          id: doc.id,
          renter: doc.data().renter,
          phone: doc.data().phone,
          address: doc.data().address,
          car: doc.data().car,
        });
      });
      setbook(updatedbook);
      // console.log(book)
    });
    // return () => unsubscribe();
  }, []);

  return (
    <View>
      <ScrollView>
        {book.map((rent) => (
          <TouchableHighlight key={rent.id} underlayColor='#dddddd'>
            <View style={styles.container}>
              <Text>ID: {rent.id}</Text>
              <Text>Renter Name: {rent.renter}</Text>
              <Text>Phone {rent.phone}</Text>
              <Text>Address: {rent.address}</Text>
              <Text>Car: {rent.car}</Text>
              {/* <TouchableOpacity */}
                {/* //onPress={() => updateData(rent)}
              //   onPress={updateData}
              //   style={styles.button}
              // > */}
                {/* <Text style={styles.buttonText}>Update</Text> */}
              {/* </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => { deletedata(rent); }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
}

export default Fetch

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  itemHeading: {
    fontWeight: 'bold',
  },
  itemText: {
    fontWeight: '300',
  },
  containerx: {
    position: 'absolute',
    width: '55',
    height: '30',
    background: '#E1C9C9',
  },
  button: {
    backgroundColor: '#FFFFFF',
    color: '#363636',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
})