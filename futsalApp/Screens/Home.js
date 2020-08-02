import React from "react";
import { View, Image, ScrollView } from "react-native";
import Header from "../Components/Header";
import Bookingnow from "../Components/Bookingnow";
import Info from "../Components/Info";
import Fasilitas from "../Components/Fasilitas";
import Bottomnav from "../Components/Bottomnav";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "darkwhite" }}>
        <Header />
        <Bookingnow />
        <Fasilitas />
        <Info />
      </ScrollView>
      <Bottomnav />
    </View>
  );
}
