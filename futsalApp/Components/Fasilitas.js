import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Fasilitas() {
  return (
    <View style={{ paddingTop: 15, marginHorizontal: 15 }}>
      <Text style={{paddingBottom: 5 ,color: 'yellow',fontSize: 18, marginBottom: 5, fontWeight: "bold" }}>Fasilitas</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: "row" }}
      >
        <View style={{ marginRight: 13 }}>
          <View style={{width: 150, height: 150, borderRadius: 8 }}>
            <Image
              style={{ borderColor:'white', borderWidth: 2, borderRadius: 15 ,width: undefined, height: 150, resizeMode: "cover" }}
              source={require("../assets/lapangan.png")}
            />
          </View>
          <View style={{alignItems: 'center', paddingTop: 5}}>
          <Text style={{color: 'white'}}>Lapangan</Text>
          </View>
        </View>
        <View style={{ marginRight: 13 }}>
          <View style={{ width: 150, height: 150, borderRadius: 8 }}>
            <Image
              source={require("../assets/gedung.jpeg")}
              style={{ borderColor:'white', borderWidth: 2, borderRadius: 15 ,width: undefined, height: 150, resizeMode: "cover" }}
            />
          </View>
          <View style={{alignItems: 'center', paddingTop: 5}}>
          <Text style={{color: 'white'}}>Parkir</Text>
          </View>
        </View>
        <View style={{ marginRight: 13 }}>
          <View style={{ width: 150, height: 150, borderRadius: 8 }}>
            <Image
              source={require("../assets/roomoffice.jpg")}
              style={{ borderColor:'white', borderWidth: 2, borderRadius: 15 ,width: undefined, height: 150, resizeMode: "cover" }}
            />
          </View>
          <View style={{alignItems: 'center', paddingTop: 5}}>
          <Text style={{color: 'white'}}>Ruang Kantor</Text>
          </View>
        </View>
        <View style={{ marginRight: 13 }}>
          <View style={{ width: 150, height: 150, borderRadius: 8 }}>
            <Image
              source={require("../assets/restarea.jpg")}
              style={{ borderColor:'white', borderWidth: 2, borderRadius: 15 ,width: undefined, height: 150, resizeMode: "cover" }}
            />
          </View>
          <View style={{alignItems: 'center', paddingTop: 5}}>
          <Text style={{color: 'white'}}>Tempaat Istirahat</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
