import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SchoolList from './SchoolList'
import Update from './Update'
import Requests from './Requests'



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const CompanyBottomNav = () => (

    <Tab.Navigator
        initialRouteName="SchoolList"
        activeColor="#fff"
        sceneAnimationEnabled={false}
        activeColor="#0273a3"
        inactiveColor="#95a5a6"
        barStyle={{ backgroundColor: '#ffff' }}
    >
        <Tab.Screen
            name="Students"
            component={SchoolList}
            options={{
                tabBarLabel: 'Students',
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
            name="Requests"
            component={Requests}
            options={{
                tabBarLabel: 'Requests',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="envelope"
                        color={color}
                        size={25}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Update}
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

export default CompanyBottomNav;
