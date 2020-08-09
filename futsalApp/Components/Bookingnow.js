import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Bookingnow() {
  return (
    <View>
      <View
        style={{
          height: 180,
          backgroundColor: "lightgreen",
          marginHorizontal: 15,
          borderRadius: 8,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center", marginBottom: 5, fontSize: 20 }}>
          Harga Sewa
        </Text>
        <Text style={{ textAlign: "center", fontWeight: "bold", marginVertical: 5 }}>
          Senin-Jum'at
        </Text>
        <Text style={{ textAlign: "center" }}> Pukul 08:00 - 16:00 : Rp 130.000 / jam</Text>
        <Text style={{ textAlign: "center" }}> Pukul 17:00 - 23:00 : Rp 180.000 / jam</Text>
        <Text style={{ textAlign: "center", fontWeight: "bold", marginVertical: 5 }}>
          Sabtu - Minggu
        </Text>
        <Text style={{ textAlign: "center" }}> Pukul 08:00 - 16:00 : Rp 150.000 @jam</Text>
        <Text style={{ textAlign: "center" }}> Pukul 17:00 - 23:00 : Rp 200.000 @jam</Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            height: 35,
            backgroundColor: "green",
            marginHorizontal: 15,
            marginTop: 8,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Booking Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
