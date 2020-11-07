import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Bottomnav from "../Components/Bottomnav";
import { TouchableOpacity } from "react-native-gesture-handler";
import papan from "../assets/papantulis.jpg"

export default function Bayar() {
  return (
    <View style={{flex: 1,}}>
      <ImageBackground source={papan} style={{flex: 1}}>
    <View
      style={{
        width: 375,
        height: 60,
        opacity: 0.7,
        backgroundColor: "white",
        marginTop: 50,
        justifyContent: "center",
      }}
    >
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 20}}>
          <Text style={{fontSize: 19, fontStyle: "normal" }}>Pembayaran</Text>
          <Image style={{height: 30, width: 60}} source={require('../assets/babalogo.png')}/>
          </View>
    </View>
    <View style={{marginHorizontal: 15, marginTop: 20, color: 'white'}}>
        <Text style={{color: 'white'}}>Pembayaran uang muka atau DP melalui</Text>
        <Text style={{color: 'white'}}>Transfer ke Rekening BCA 123 4545 678</Text>
        <Text style={{color: 'white'}}>a/n Baba Futsal Jakarta</Text>
        <View style={{height: 40, backgroundColor: 'purple', marginTop: 20,borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 16, color: 'white' }}>Upload Bukti Bayar</Text>
        </View>
        <Text style={{paddingTop: 10, color: 'white'}}>Silahkan Upload Bukti Pembayaran anda Dibawah ini segera.</Text>
        <Text style={{color: 'white'}}>Jika Sudah Pihak Admin Akan Memverifikasi  Bukti Anda dan Memberikan Bukti Sewa Pada Menu Order.</Text>
    <TouchableOpacity>
    <View style={{height: 40, backgroundColor: 'purple', width: 180,marginHorizontal: 80, borderRadius: 10,marginTop: 15, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 16, color: 'white'}}>Upload ..</Text>
    </View>
    </TouchableOpacity>
    <Text style={{paddingTop: 30, color: 'white'}}>Minimum Dp :</Text>
    <Text style={{color: 'white'}}>Rp. 50.000 /Jam</Text>
    </View>
    </ImageBackground>
    </View>

  );
}
