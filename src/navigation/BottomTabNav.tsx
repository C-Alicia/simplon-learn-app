import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import COLORS from "../constants/colors";
import TabBarIcon from "../components/TabBar/TabBarIcon";
import MyCoursesScreen from "../screens/MyCoursesScreen";
import SchoolsScreen from "../screens/SchoolsScreen";
import AccountScreen from "../screens/AccountScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const Tab = createBottomTabNavigator();

export default function BottomTabNav({navigation}:any) {
  // test si user est connecté
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
       
        // User is signed out
        navigation.navigate("Login");
      }
    });
  }, [auth.currentUser]);

  return (
    <Tab.Navigator
    detachInactiveScreens
    screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
    }}
    >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon: ({ color }) => 
            <TabBarIcon iconName='home' iconColor={color} title='Accueil'/>,
        }}
        />
        <Tab.Screen name="MyCourses" component={MyCoursesScreen} 
        options={{
            tabBarIcon: ({ color }) => 
            <TabBarIcon iconName='school' iconColor={color} title='Mes cours'/>,
        }}
        />
        <Tab.Screen name="Schools" component={SchoolsScreen} 
        options={{
            tabBarIcon: ({ color }) => 
            <TabBarIcon iconName='location-city' iconColor={color} title='Centres'/>,
        }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color }) => 
            <TabBarIcon iconName='person' iconColor={color} title='Compte'/>,
        }}
        />
        
      </Tab.Navigator>
  );
}
