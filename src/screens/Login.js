import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'
import { AsyncStorage } from 'react-native';

function Login(props) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])


    function LoginAcc() {

        if (email === 'admin@gmail.com' && password === 'adminadmin') {
            props.navigation.navigate('AdminNavigation')
        } else if (email == '' || password == '') {
            alert('Please fill all fields!')
        }
        else {
            auth()

            //Sorry Sir time kam tha apni logic lga li sorry 
                .signInWithEmailAndPassword(email, password)
                .then((res) => {
                    if ((res.user.email).slice(0, 2) === 'co') {
                       props.navigation.navigate('CompanyNavigation')
                    } else{
                        props.navigation.navigate('Navigation')
                    }
                    // console.log(res.user.email)
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert('Email/password incorrect!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    }
                    else {
                        props.navigation.navigate('Navigation')
                    }
                    console.error(error);
                })
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <ImageBackground source={require('../images/login-bg.jpg')} style={styles.image}>
                        <View style={styles.midcont}>
                            <ScrollView>
                                <Text style={{ color: 'black', fontSize: 35, alignSelf: 'center', paddingBottom: 50, textAlign: 'center', paddingTop: 20, justifyContent: 'center' }}>Login</Text>
                                <TextInput
                                    placeholder="Email Address"
                                    placeholderTextColor="black"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => setEmail('co'+val)}
                                    keyboardType="email-address"
                                />
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor="black"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => setPassword(val)}
                                    secureTextEntry={true}
                                />
                                <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>By loging, you are agree to RAK  Bridges <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}> Privacy Policy</Text> and <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Terms of Use</Text>.
                            </Text>
                                <TouchableOpacity onPress={() => LoginAcc()}
                                    style={styles.button}
                                >
                                    <Text style={{ color: 'white' }}>LOG IN</Text>
                                </TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingBottom: 50, textAlign: 'center' }}>Not a member? <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }} onPress={() => props.navigation.navigate('CreateAccount')}> Join now</Text>
                                </Text>
                            </ScrollView>
                        </View>
                    </ImageBackground>

                </View>

            </View>
        </>
    );
}


export default Login;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        alignSelf: 'center'
    }, image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    setting: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textInput: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 15,
        borderRadius: 5,
        marginTop: 0,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0273a3",
        padding: 15,
        margin: 20,
        borderRadius: 5,
        marginTop: 40
    }, midcont: {
        flex: 1,
        marginTop: '20%',
        marginBottom: '20%',
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    }, splashscreenimage: {
        resizeMode: 'contain',
        flex: 1,
        width: '70%',
        height: 100,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30
    }
});