import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Platform,
} from "react-native";
import Header from "./Components/Header";
import Bookingnow from "./Components/Bookingnow";
import Info from "./Components/Info";
import Fasilitas from "./Components/Fasilitas";
import Bottomnav from "./Components/Bottomnav";
import { Home, Order, Help, Akun, Login, Daftar, Bayar, Sewa } from "./Screens";
// import { createStackNavigator } from "react-navigation-stack";
// import { NavigationContainer } from "react-navigation";

// const Stack = createStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
    //     {/* <Stack.Screen name="Daftar" component={Daftar} options={{ headerShown: false }} /> */}
    //     <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    //     {/* <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} /> */}
    //     {/* <Stack.Screen name="Bayar" component={Bayar} options={{ headerShown: false }} /> */}
    //     {/* <Stack.Screen name="booking" component={booking} options={{ headerShown: false }} /> */}
    //     {/* <Stack.Screen name="Sewa" component={Sewa} options={{ headerShown: false }} /> */}
    //     {/* <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} /> */}
    //     {/* <Stack.Screen name="Akun" component={Akun} options={{ headerShown: false }} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    //  <Home />
    // <Help />
    // <Order />
    // <Akun />
    // <Login />
    // <Daftar />
    // <Bayar />
    <Sewa />
  );
}
