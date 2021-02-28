import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'


function CreateAccountCompany(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [companyTitle, setCompanyTitle] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [type, settype] = useState('Company')

    function CreateAcc() {

        var key = database().ref('CompanyAccount').push().key

        auth()
            .createUserWithEmailAndPassword('co'+email, password)
            .then(() => {
                if(companyTitle === "" || email === "" || companyName === "" || password === "" || cpassword === "" ){
                    alert('Please fill all feilds!')
                }else if(password !== cpassword){
                    alert('Password incorrect!')
                }
                else{
                    let data ={
                       email,
                       companyTitle,
                       companyName,
                       type,
                       key
                    }
                    database().ref('/').child('CompanyAccount').push(data).then((res)=>{
                        alert('User account created & signed in!');
                        props.navigation.navigate('Login')
                    })
            }
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            })
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <ScrollView>
                        <View style={styles.header}>
                            <FontAwesome onPress={() => props.navigation.navigate('Login')}
                                style={{ textAlign: 'right', paddingRight: 20, paddingTop: 20 }}
                                name="close"
                                color="black"
                                size={30}
                            />
                            <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', paddingTop: 20, fontWeight: 'bold', textAlign: 'center' }}>YOUR ACCOUNT IS EVERYTHING FOR US
                    </Text>
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>Reference site about Lorem Ipsum, giving information on as a ran its origins, as well as a random Lipsum generator.
                    </Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('CreateAccount')}
                                style={styles.button2}
                            >
                                <Text style={{ color: 'white' }}>STUDENT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('CreateAccountCompany')}
                                style={styles.button}
                            >
                                <Text style={{ color: 'white' }}>COMPANY</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingtext}>

                            <TextInput
                                placeholder="Company Email Address"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setEmail(val)}
                                keyboardType="email-address"
                            />
                            <TextInput
                                placeholder="Company Name"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setcompanyName(val)}
                            />
                            <TextInput
                                placeholder="Company Job Title"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setCompanyTitle(val)}
                            />
                            <TextInput
                                placeholder="Password   "
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setPassword(val)}
                                secureTextEntry={true}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setCpassword(val)}
                                secureTextEntry={true}
                            />
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>By creating an account, you agree to RAK Bridges<Text style={{ textDecorationLine: 'underline' }}> Privacy Policy </Text> and<Text style={{ textDecorationLine: 'underline' }}>Terms of Use.</Text></Text>
                            <TouchableOpacity onPress={() => CreateAcc()}
                                style={styles.button2}
                            >
                                <Text style={{ color: 'white' }}>CREATE ACCOUNT</Text>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }} onPress={() => props.navigation.navigate('Login')}>Already a member? <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}> Sign in.</Text>
                            </Text>
                        </View>
                    </ScrollView>
                </View>

            </View>
        </>
    );
}


export default CreateAccountCompany;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1
    },
    header: {
        color: '#ffffff',
        backgroundColor: '#fff'
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
    },
    button: {
        alignItems: "center",
        backgroundColor: "#55aacf",
        padding: 15,
        margin: 20,
        borderRadius: 5,
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#0273a3",
        padding: 15,
        margin: 20,
        borderRadius: 5,
    },
     checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        marginLeft: 20,
    },
    label: {
        // margin:2,
        paddingRight: 30
    },
});