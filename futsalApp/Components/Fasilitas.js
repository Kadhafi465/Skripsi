import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Fasilitas() {
  return (
    <View style={{ paddingTop: 10, marginHorizontal: 15 }}>
      <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: "bold" }}>Fasilitas</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: "row" }}
      >
        <View style={{ marginRight: 13 }}>
          <View style={{ width: 150, height: 150, borderRadius: 8 }}>
            <Image
              style={{ width: undefined, height: 150, resizeMode: "cover" }}
              source={require("../assets/lapangan.png")}
            />
          </View>
          <Text>Lapangan</Text>
        </View>
        <View style={{ marginRight: 13 }}>
          <View style={{ width: 150, height: 150, borderRadius: 8 }}>
            <Image
              source={require("../assets/gedung.jpeg")}
              style={{ width: undefined, height: 150, resizeMode: "cover" }}
            />
          </View>
          <Text>Parkir</Text>
        </View>
        <View style={{ marginRight: 13 }}>
          <View style={{ width: 150, height: 150, borderRadius: 8 }}>
            <Image
              source={require("../assets/roomoffice.jpg")}
              style={{ width: undefined, height: 150, resizeMode: "cover" }}
            />
          </View>
          <Text>Ruang Kantor</Text>
        </View>
        <View style={{ marginRight: 13 }}>
          <View style={{ width: 150, height: 150, borderRadius: 8 }}>
            <Image
              source={require("../assets/restarea.jpg")}
              style={{ width: undefined, height: 150, resizeMode: "cover" }}
            />
          </View>
          <Text>Tempaat Istirahat</Text>
        </View>
      </ScrollView>
    </View>
  );
}
