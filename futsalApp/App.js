import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import Header from './Components/Header'
import Bookingnow from './Components/Bookingnow'
import Info from './Components/Info'
import Fasilitas from './Components/Fasilitas'
import Bottomnav from './Components/Bottomnav'
import Home from "./Screens/Home";
import Order from "./Screens/Order.js";
import Help from './Screens/Help'
import Akun from "./Screens/Akun";

export default function App() {
  return (
    <Home />
    // <Help />
    // <Order />
    // <Akun />
  );
}
