import { useState } from "react";
import 'firebase/firestore';
import firebase from '../database/firebase';
import { View, StyleSheet, Button, Text, Alert, Image} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { doc } from "firebase/firestore";

Login = ({navigation}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () =>{
        const db = firebase.firestore();
        db.collection('register')
            .where('email', '==', email)
            .where('password', '==', password)
            .get()
            .then((snapshot) => {
                if(snapshot.empty){
                    Alert.alert('Enter details to signin!');
                    return;
                }else{
                    navigation.navigate('Peta');
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return(
        <View style={styles.container}>
            <Image style={styles.image}source={require('../assets/logoppb.png')} alt="logo"/> 
            <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                color="#363636"
                title="Sign In"
                onPress={handleLogin}
            />
            {error ? <Text>{error}</Text> : null}
            <Text 
                style={styles.loginText}
                onPress={() => navigation.navigate('Signup')}>
                Don't have account? Click here to signup
            </Text>
        </View>
    )
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
      }
})

export default Login;