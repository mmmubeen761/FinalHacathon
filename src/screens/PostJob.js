import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'


function PostJob(props) {

    const [email, setEmail] = useState('')
    const [work, setwork] = useState('')
    const [educationlevel, seteducationlevel] = useState('')
    const [companyTitle, setCompanyTitle] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [type, settype] = useState('Company')

    function CreateAcc() {


        if (companyTitle === "" || email === "" || companyName === "" || work === "" || educationlevel === "") {
            alert('Please fill all feilds!')
        } 
        else {
            let data = {
                email,
                companyTitle,
                companyName,
                type,
                work,
                educationlevel
            }
            database().ref('/').child('PostJob').push(data).then((res) => {
                alert('Job Posted!');
                props.navigation.goBack()
            })
        }
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <ScrollView>
                        <View style={styles.header}>
                            <FontAwesome onPress={() => props.navigation.goBack()}
                                style={{ textAlign: 'right', paddingRight: 20, paddingTop: 20 }}
                                name="close"
                                color="black"
                                size={30}
                            />
                            <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', paddingTop: 20, fontWeight: 'bold', textAlign: 'center' }}>POST JOB
                    </Text>
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
                                placeholder="Job Title"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setCompanyTitle(val)}
                            />
                            <TextInput
                                placeholder="Work experience"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setwork(val)}
                            />
                            <TextInput
                                placeholder="Education level"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => seteducationlevel(val)}
                            />
                            <TouchableOpacity onPress={() => CreateAcc()}
                                style={styles.button2}
                            >
                                <Text style={{ color: 'white' }}>POST JOB</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </View>
        </>
    );
}


export default PostJob;


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