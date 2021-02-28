import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import BottomNav from '../screens/BottomNav'
import {DrawerContent} from './DrawerCont'
import { NavigationContainer } from '@react-navigation/drawer';
import StartNavigation from './Startnav';

const Drawer = createDrawerNavigator();

export default function Navigation(props) {
  return (
    //  <NavigationContainer>
      <Drawer.Navigator initialRouteName="BottomNav" drawerContent={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="BottomNav" component={BottomNav} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
            name="home"
            size={size}
            color={'#00a2ff'}
            />
            ),
          }} />

       
      </Drawer.Navigator>
          // </NavigationContainer>
  );
}





