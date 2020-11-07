import React from "react";
import { View, Text, Image } from "react-native";

export default function Info() {
  return (
    <View style={{ marginTop: 25, marginHorizontal: 15 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: 'yellow' }}>Info BABA</Text>
      <View>
        <View style={{ alignItems: "center" }}>
          <View style={{ width: 250, height: 170, borderRadius: 10 }}>
            <Image
              source={require("../assets/babalogo.png")}
              style={{ width: undefined, height: 170, resizeMode: "cover", borderRadius: 10, marginTop: 10 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", marginBottom: 5, color: 'white', paddingTop: 15 }}>Tournamen</Text>
          <Text style={{ marginBottom: 10, color: 'white' }}>
            Baba Futsal akan mengadakan turnamen tingkat kecamatan yang akab diadakan di bulan
            Januari, Ayo Daftarkan Segera Tim Mu
          </Text>
        </View>
      </View>
    </View>
  );
}
