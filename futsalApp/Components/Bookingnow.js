import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Bookingnow() {
  return (
    <View>
      <View
        style={{
          height: 200,
          backgroundColor: "grey",
          opacity : 0.5,
          marginHorizontal: 15,
          borderRadius: 8,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center", marginBottom: 5, fontSize: 20, color: 'yellow' }}>
          Harga Sewa
        </Text>
        <Text style={{ textAlign: "center", fontWeight: "bold", marginVertical: 5, color: 'white' }}>
          Senin-Jum'at
        </Text>
        <Text style={{ textAlign: "center", color:'white' }}> Pukul 08:00 - 16:00 : Rp 130.000 / jam</Text>
        <Text style={{ textAlign: "center", color: 'white' }}> Pukul 17:00 - 23:00 : Rp 180.000 / jam</Text>
        <Text style={{ textAlign: "center", fontWeight: "bold", marginVertical: 5, color:'white' }}>
          Sabtu - Minggu
        </Text>
        <Text style={{ textAlign: "center", color:'white' }}> Pukul 08:00 - 16:00 : Rp 150.000 /jam</Text>
        <Text style={{ textAlign: "center", color:'white' }}> Pukul 17:00 - 23:00 : Rp 200.000 /jam</Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            height: 40,
            backgroundColor: "grey",
            opacity: 0.7,
            marginHorizontal:30,
            marginTop: 15,
            borderColor: 'purple',
            borderRadius: 18,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{color: 'yellow'}}>Booking Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
