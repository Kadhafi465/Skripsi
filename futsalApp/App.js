import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image, TextInput, Button, Alert } from "react-native";
import Header from './Components/Header'
import Bookingnow from './Components/Bookingnow'
import Info from './Components/Info'
import Fasilitas from './Components/Fasilitas'
import Bottomnav from './Components/Bottomnav'
import Home from "./Screens/Home";
import Order from "./Screens/Order.js";
import Help from './Screens/Help'
import Akun from "./Screens/Akun";
import Login from "./Screens/Login";
import Daftar from "./Screens/Daftar";

export default function App() {
  return (
    // <Home />
    // <Help />
    // <Order />
    // <Akun />
    <Login />
    // <Daftar />
    );
}
