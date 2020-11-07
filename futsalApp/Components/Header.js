import React from "react";
import { View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        height: 170,
        marginTop: 30,
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <Image style={{ width: 350, height: 170 }} source={require("../assets/babalogo.png")} />
    </View>
  );
}
