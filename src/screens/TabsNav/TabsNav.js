import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../home/Home';
import Config from '../config/Config';
import Feed from './screensTab/Feed';
import Profile from './screensTab/Profile';
import Search from './screensTab/Search';
import Feeds from "../../assets/icons/home.svg";
import Buscar from "../../assets/icons/search.svg";
import Today from "../../assets/icons/today.svg";
import Notifications from "../../assets/icons/os.svg";
import Account from "../../assets/icons/account.svg";


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#708090"
      barStyle={{ 
        backgroundColor: '#B0C4DE',
     }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Feeds width={25} height={25} fill="#708090" />  
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <Today width={25} height={25} fill="#708090" />
          ),
        }}
      />
       <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color }) => (
            <Buscar width={25} height={25} fill="#708090" />
          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={Config}
        options={{
          tabBarLabel: 'Config',
          tabBarIcon: ({ color }) => (
            <Notifications width={25} height={25} fill="#708090" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Config',
          tabBarIcon: ({ color }) => (
            <Account width={25} height={25} fill="#708090" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const TabsNav = () => {
  return (
    MyTabs()
  );
}

