import React from "react";
import { View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View style={{ backgroundColor: "white", height: 170, marginTop: 30 }}>
      <Image style={{ width: 350, height: 170 }} source={require("../assets/baba.jpg")} />
    </View>
  );
}
