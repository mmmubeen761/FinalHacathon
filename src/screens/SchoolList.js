import React,{useState,useEffect} from 'react';
import {
    View, Text, TouchableHighlight, Dimensions, TouchableOpacity, Image, TextInput, Platform, StyleSheet, ScrollView, Alert, Modal, StatusBar, ImageBackground
} from 'react-native'; 
import { Card, ListItem, Button } from 'react-native-elements'
import { Avatar } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database'


function SchoolList(props) {

    const [data, setData] = useState([])


    useEffect(() => {

        database()
            .ref('/').child('StudentAccount')
            .on('value', snapshot => {
                if (snapshot.val() !== null)
                    setData({
                        ...snapshot.val()
                    })
            });

    }, [])


    
    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                <ImageBackground source={{uri:'https://image.shutterstock.com/image-vector/back-school-set-different-signs-260nw-1453000499.jpg'}} style={styles.image}>
                        <View style={styles.midcont}>
                            <FontAwesome  onPress={() => props.navigation.openDrawer()}
                                style={{ textAlign: 'left', padding: 20 }}
                                name="bars"
                                color="white"
                                size={30}
                            />
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', padding: 20, alignItems: 'center' }}>STUDENTS 
                                 </Text>
                            <Text>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </Text>

                        </View>
                        <View style={styles.setting}>
                            <ScrollView>
                            {Object.keys(data).map((val, id) => {
                            return (

                                <>

                                    <View style={{ width: '100%', alignSelf: 'center' }}>
                                        <Card>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Avatar.Image
                                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDn65YiCWjptvAOCj6Y97hGtdCVKTDKVjImA&usqp=CAU' }}
                                                    size={60}
                                                />
                                                <Card.Title style={{ fontSize: 20, color: 'black', alignSelf: 'flex-start', paddingLeft: 10, paddingTop: 20 }}>
                                                    {data[val].username}</Card.Title>
                                            </View>
                                            <Text style={{ marginBottom: 10 }}>{data[val].email} </Text>
                                            <Card.Divider />
                                            <View style={{
                                                width: '80%',
                                                flexDirection: 'row'
                                            }}>
                                                <View >
                                                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>College : </Text>
                                                </View>
                                                <View>
                                                    <Text style={{ marginBottom: 10 }}>{data[val].college}</Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                width: '80%',
                                                flexDirection: 'row'
                                            }}>
                                                <View >
                                                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Age : </Text>
                                                </View>
                                                <View>
                                                    <Text style={{ marginBottom: 10 }}>{data[val].age}</Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                width: '80%',
                                                flexDirection: 'row'
                                            }}>
                                                <View >
                                                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Marks : </Text>
                                                </View>
                                                <View>
                                                    <Text style={{ marginBottom: 10 }}>{data[val].marks}</Text>
                                                </View>
                                            </View>
                                        </Card>
                                    </View>
                                </>
                            )
                        })}
                            </ScrollView>

                        </View>
                    </ImageBackground>
                </View>

            </View>
        </>
    );
}


export default SchoolList;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    midcont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    setting: {
        flex: 4 ,
        backgroundColor: '#fff',
    },
    textInput: {
        color: 'black',
        padding: 15,
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, image: {
        flex: 1,
        resizeMode: "contain",
        // justifyContent: "center",
        height: '50%'
    }, textInput2: {
        borderColor: 'white',
        // borderWidth: 1,
        paddingLeft: 18,
        borderRadius: 30,
        backgroundColor: "#0273a3",
        alignSelf: 'center',
        paddingRight:18,
        paddingTop:15,
        paddingBottom:15
    },
});