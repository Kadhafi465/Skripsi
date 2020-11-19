import React from "react";
import { View, ScrollView, Text, ImageBackground, Image } from "react-native";
import Bottomnav from "../Components/Bottomnav";
import papan from '../assets/papantulis.jpg'

export default function Help({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={papan} style={{flex:1 ,marginTop: 15}}>
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
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 20}}>
          <Text style={{ fontWeight: 'bold' ,fontSize: 19, fontStyle: "normal" }}>Help</Text>
          <Image style={{height: 30, width: 60}} source={require('../assets/babalogo.png')}/>
          </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 15 }}>
          <Text style={{ fontWeight: "bold", color: 'yellow', paddingBottom: 5 }}>Cara Order Lapangan</Text>
          <Text style={{color: 'white'}}>1. Klik Menu Booking </Text>
          <Text style={{color: 'white'}}>2. Pilih Jadwal Kosong</Text>
          <Text style={{color: 'white'}}>3. Klik Booking</Text>
          <Text style={{color: 'white'}}>4. Upload Bukti Bayar</Text>
          <Text style={{color: 'white'}}>5. Setelah Upload Bukti Bayar, Bukti Sewa Akan dikirim ke menu order</Text>
          <Text style={{ paddingBottom: 5,paddingTop: 10, fontWeight: "bold", color: 'yellow' }}>Ketentuan</Text>
          <Text style={{color: 'white'}}>1. Dp Minamal Rp. 50.000</Text>
          <Text style={{color: 'white'}}>2. Datang Tepat Waktu sesuai Jam Sewa</Text>
          <Text style={{ color: 'yellow', paddingBottom: 5,paddingTop: 10, fontWeight: "bold" }}>Kontak</Text>
          <Text style={{color:'white'}}>0896-0000-9899</Text>
        </View>
      </ScrollView>
      <Bottomnav navigation={navigation} />
      </ImageBackground>
    </View>
  );
}
