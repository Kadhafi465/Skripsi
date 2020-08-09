import React from "react";
import { View, Text } from "react-native";
import Bottomnav from "../Components/Bottomnav";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Bayar() {
  return (
    <View style={{flex: 1,}}>
    <View
      style={{
        width: 800,
        height: 70,
        backgroundColor: "lightblue",
        marginTop: 30,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 17, fontStyle: "normal", marginHorizontal: 20 }}>
        Form Pembayaran
      </Text>
    </View>
    <View style={{marginHorizontal: 15, marginTop: 20}}>
        <Text>Pembayaran uang muka atau DP melalui</Text>
        <Text>Transfer ke Rekening BCA 123 4545 678</Text>
        <Text>a/n Baba Futsal Jakarta</Text>
        <View style={{height: 40, backgroundColor: 'lightgreen', marginTop: 20,borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 16, }}>Upload Bukti Bayar</Text>
        </View>
        <Text style={{paddingTop: 10,}}>Silahkan Upload Bukti Pembayaran anda Dibawah </Text>
        <Text>Ini Secepatnya.</Text>
        <Text>Jika Sudah Pihak Admin Akan Memverifikasi  Bukti </Text>
        <Text>Anda dan Memberikan Bukti Sewa Pada Menu Order</Text>
    <TouchableOpacity>
    <View style={{height: 40, backgroundColor: 'lightgreen', width: 180,marginHorizontal: 80, borderRadius: 10,marginTop: 15, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 16}}>Upload ..</Text>
    </View>
    </TouchableOpacity>
    <Text style={{paddingTop: 30}}>Minimum Dp :</Text>
    <Text>Rp. 50.000 /Jam</Text>
    </View>
    </View>

  );
}
