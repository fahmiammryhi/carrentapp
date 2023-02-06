import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './dashboard';
import Peta from './peta';
import About from './about';
import Transaksi from './transaksi';
import History from './history';

const Tab = createBottomTabNavigator();

function MyTabs () {
    return (
      <Tab.Navigator>
        <Tab.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="car-sport-outline" size={30} color='black'
            />
          ),
          tabBarShowLabel: false,
          headerShown: null,
        }}
        />
        <Tab.Screen 
        name='History'
        component={History}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="reload-circle-outline" size={30} color='black' />
          ),
          tabBarShowLabel: false,
          headerShown: null,
        }}
        />
        <Tab.Screen 
        name='Peta'
        component={Peta}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="map-outline" size={30} color='black' />
          ),
          tabBarShowLabel: false,
          headerShown: null,
        }}
        />
        <Tab.Screen 
        name='About'
        component={About}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="alert-circle-outline" size={30} color='black' />
          ),
          tabBarShowLabel: false,
          headerShown: null,
        }}
        />
      </Tab.Navigator>
    );
  }

export default MyTabs;