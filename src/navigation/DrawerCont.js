import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableOpacity, Switch, Linking } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';


export function DrawerContent(props) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 50 }}
                                    source={{ uri: 'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg' }}
                                    size={80}
                                />
                            </View>
                        <Text style={{ flex: 1, textAlign: 'center' }}>Edit</Text>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label="Dashboard"
                            onPress={() => { props.navigation.navigate('BottomNav') }}
                        />
                        <DrawerItem
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Contact Us') }}
                        />
                        <DrawerItem
                            label="Logout"
                            onPress={() => { auth()
                                .signOut()
                                .then(() => props.navigation.navigate('Login'))
                                .catch(()=>props.navigation.navigate('Login'))
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});