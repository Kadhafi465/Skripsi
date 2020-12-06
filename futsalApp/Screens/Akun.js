import React from "react";
import { View, ScrollView, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import Bottomnav from "../Components/Bottomnav";
import papan from "../assets/papantulis.jpg";

export default function Akun({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 15 }}>
      <ImageBackground source={papan} style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              width: 375,
              height: 60,
              opacity: 0.7,
              backgroundColor: "white",
              marginTop: 30,
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
              <Text style={{ fontSize: 19, fontStyle: "normal" }}>Akun</Text>
              <Image style={{ height: 30, width: 60 }} source={require("../assets/babalogo.png")} />
            </View>
          </View>
          <View
            style={{
              height: 150,
              opacity: 0.6,
              backgroundColor: "grey",
              marginTop: 50,
              borderRadius: 10,
              marginHorizontal: 15,
            }}
          >
            <Text style={{ marginTop: 10, marginLeft: 10, color: "white", fontWeight: "bold" }}>Nama : </Text>
            <Text style={{ marginLeft: 10, marginTop: 10, color: "white", fontWeight: "bold" }}>No.Telpon :</Text>
          </View>
          <View
            style={{
              marginTop: 200,
              width: 150,
              height: 45,
              opacity: 0.7,
              backgroundColor: "grey",
              borderColor: "red",
              borderWidth: 2,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 115,
            }}
          >
            <TouchableOpacity onPress={() => navigation.popToTop()}>
              <Text style={{ color: "yellow" }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Bottomnav navigation={navigation} />
      </ImageBackground>
    </View>
  );
}
