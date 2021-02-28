import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import CompanyBottomNav from '../screens/CompanyBottomNav'
import PostJob from '../screens/PostJob'
import { CompanyDrawerContent } from './CompanyDrawerCont'
import { NavigationContainer } from '@react-navigation/drawer';
import StartNavigation from './Startnav';

const Drawer = createDrawerNavigator();

export default function CompanyNavigation(props) {
  return (
    //  <NavigationContainer>
    <Drawer.Navigator initialRouteName="CompanyBottomNav" drawerContent={props => <CompanyDrawerContent {...props} />}>
      <Drawer.Screen name="CompanyBottomNav" component={CompanyBottomNav} />
      <Drawer.Screen name="Post a Job" component={PostJob} />
      {/* <Drawer.Screen name="Logout" component={Logout} /> */}


    </Drawer.Navigator>
    // </NavigationContainer>
  );
}





