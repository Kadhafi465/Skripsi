import React from 'react';
import {View, ImageBackground, Text, Image, ScrollView } from 'react-native';
import papan from '../assets/papantulis.jpg'

export default function Sewa() {
    return (
        <View style={{flex:1 ,marginTop: 15}}>
      <ImageBackground source={papan} style={{flex:1}}>
      <ScrollView>
      <View
          style={{
            width: 375,
            height: 60,
            opacity: 0.5,
            backgroundColor: "white",
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 20}}>
          <Text style={{ fontSize: 19, fontStyle: "normal" }}>Pilih Jadwal</Text>
          <Image style={{height: 30, width: 60}} source={require('../assets/babalogo.png')}/>
          </View>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
    )
}