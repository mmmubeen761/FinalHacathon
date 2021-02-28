import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from './Search'
import Contacts from './Contacts'
import EmailTwo from './EmailTwo'



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => (

    <Tab.Navigator
        initialRouteName="Contacts"
        activeColor="#fff"
        sceneAnimationEnabled={false}
        activeColor="#0273a3"
        inactiveColor="#95a5a6"
        barStyle={{ backgroundColor: '#ffff' }}
    >
        <Tab.Screen
            name="Companies"
            component={Contacts}
            options={{
                tabBarLabel: 'Companies',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="search"
                        color={color}
                        size={25}
                    />
                ),
            }}

        />
        <Tab.Screen
            name="Vacancies"
            component={EmailTwo}
            options={{
                tabBarLabel: 'Vacancies',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="bell"
                        color={color}
                        size={25}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Search}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="user"
                        color={color}
                        size={25}
                    />
                ),
            }}
        />

    </Tab.Navigator>
);

export default BottomNav;
