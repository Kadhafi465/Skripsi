import React from "react";
import { View, ScrollView, Text } from "react-native";
import Bottomnav from "../Components/Bottomnav";

export default function Help() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            width: 800,
            height: 70,
            backgroundColor: "lightblue",
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 17, fontStyle: "normal", marginHorizontal: 20 }}>Help</Text>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 15 }}>
          <Text>Cara Order Lapangan</Text>
          <Text>1. Klik Menu Booking </Text>
          <Text>2. Pilih Jadwal Kosong</Text>
          <Text>3. Klik Booking</Text>
          <Text>4. Upload Bukti Bayar</Text>
          <Text>5. Setelah Upload Bukti Bayar, Bukti Sewa Akan dikirim ke menu order</Text>
          <Text>Ketentuan</Text>
          <Text>1. Dp Minamal Rp. 50.000</Text>
          <Text>2. Datang Tepat Waktu sesuai Jam Sewa</Text>
        </View>
      </ScrollView>
      <Bottomnav />
    </View>
  );
}
