
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import RegisterScreen from "./screens/Register/RegisterScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/Login/LoginScreen";



const Stack = createStackNavigator();

// Stack za login/registraciju
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Ako budeš imao RegisterScreen: */}
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
}

// Stack za glavnu aplikaciju
function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}

export function Routes(){
  const {user} = useSelector((state) => state.user);
  const dispatch = useDispatch();


  useEffect(()=>{
      console.log(user)
  },[user])


    return (
        <NavigationContainer>
        {user!==null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    )
}