import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar, } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MainAdmin = (props) => {

 
    return (
        <>
            <View style={styles.action}   >
                <FontAwesome onPress={() => props.navigation.openDrawer()}
                                style={{ textAlign: 'left',  }}
                                name="bars"
                                color="white"
                                size={30}
                            />
                <Text style={styles.textInput}>Admin Profile</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Image style={styles.header} source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-school-season-welcome-new-students-blackboard-hand-painted-image_12937.jpg' }} />
                </View>
                <Image style={styles.avatar} source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDn65YiCWjptvAOCj6Y97hGtdCVKTDKVjImA&usqp=CAU'  }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}> Admin  </Text>
                        <Text style={styles.info}> admin@gmail.com</Text>
                        <Text style={styles.description}>Welcome Admin!</Text>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={{ color: 'white' }} onPress={()=>props.navigation.navigate('Admin')}>View All Data</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default MainAdmin;

const styles = StyleSheet.create({
    header: {
        // backgroundColor: "#ff3042",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#0273a3",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#ff3042",
        marginTop: 10
    },
    description: {
        fontSize: 36,
        color: "#0273a3",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 30,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#0273a3",
        color: '#fff',

    }, action: {
        width: ('100%'),   // 80% of width device screen
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0273a3',
        paddingBottom: 18,

    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#fff',
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 20,
        fontWeight: 'bold'
    },
});