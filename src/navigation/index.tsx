import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../screens/LandingScreen";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BottomTabNav from "./BottomTabNav";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import AccountScreen from "../screens/AccountScreen";
import CourseScreen from "../screens/CourseScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        detachInactiveScreens
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BottomTabNav"
          component={BottomTabNav}
          options={{ headerShown: false, gestureEnabled: false }}
        />

        <Stack.Screen
          name="Course"
          component={CourseScreen}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
