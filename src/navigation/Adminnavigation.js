import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Admin from '../screens/Admin'
import MainAdmin from '../screens/MainAdmin'
import CompanyData from '../screens/CompanyData'
import { AdminDrawerContent } from './AdminDrawerCont'
import StartNavigation from './Startnav';

const Drawer = createDrawerNavigator();

export default function AdminNavigation(props) {
  return (
    <Drawer.Navigator initialRouteName="MainAdmin" drawerContent={props => <AdminDrawerContent {...props} />}>
      <Drawer.Screen name="MainAdmin" component={MainAdmin} />
      <Drawer.Screen name="Admin" component={Admin} />
      <Drawer.Screen name="CompanyData" component={CompanyData} />


    </Drawer.Navigator>
  );
}





