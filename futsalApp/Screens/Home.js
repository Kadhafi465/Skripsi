import React from "react";
import { ImageBackground, View, Image, ScrollView } from "react-native";
import Header from "../Components/Header";
import Bookingnow from "../Components/Bookingnow";
import Info from "../Components/Info";
import Fasilitas from "../Components/Fasilitas";
import Bottomnav from "../Components/Bottomnav";
import papan from '../assets/papantulis.jpg'

export default function Home() {
  return (
    <View style={{ flex: 1 , marginTop:15}}> 
    <ImageBackground source={papan} style={{flex: 1}}>
      <ScrollView>
        <Header />
        <Bookingnow />
        <Fasilitas />
        <Info />
      </ScrollView>
      <Bottomnav />

    </ImageBackground>
    </View>
  );
}
