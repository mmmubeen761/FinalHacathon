import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation';
import CompanyNavigation from './Companynavigation';
import AdminNavigation from './Adminnavigation';
import 'react-native-gesture-handler';
import SplashScreen from '../screens/SplashScreen'
import CreateAccount from '../screens/CreateAccount'
import CreateAccountCompany from '../screens/CreateAccountCompany'
import Login from '../screens/Login'
import BottomNav from '../screens/BottomNav'
import CompanyBottomNav from '../screens/CompanyBottomNav'
import Search from '../screens/Search'
import Contacts from '../screens/Contacts'
import EmailTwo from '../screens/EmailTwo'
import SchoolList from '../screens/SchoolList'
import Requests from '../screens/Requests'
import Update from '../screens/Update'
import PostJob from '../screens/PostJob'
import ApplyJob from '../screens/ApplyJob'
import Admin from '../screens/Admin'
import MainAdmin from '../screens/MainAdmin'


const Stack = createStackNavigator();

function StartNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Admin" component={Admin} />
                <Stack.Screen name="MainAdmin" component={MainAdmin} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Screen name="EmailTwo" component={EmailTwo} />
                <Stack.Screen name="BottomNav" component={BottomNav} />
                <Stack.Screen name="CompanyBottomNav" component={CompanyBottomNav} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="CreateAccountCompany" component={CreateAccountCompany} />
                <Stack.Screen name="Navigation" component={Navigation} />
                <Stack.Screen name="CompanyNavigation" component={CompanyNavigation} />
                <Stack.Screen name="AdminNavigation" component={AdminNavigation} />
                <Stack.Screen name="SchoolList" component={SchoolList} />
                <Stack.Screen name="Requests" component={Requests} />
                <Stack.Screen name="Update" component={Update} />
                <Stack.Screen name="PostJob" component={PostJob} />
                <Stack.Screen name="ApplyJob" component={ApplyJob} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StartNavigation;

