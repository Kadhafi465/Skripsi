import React from 'react'
import {View, Text, Image} from 'react-native'

export default function Info() {
    return(
        <View style={{ marginTop: 15, marginHorizontal: 15 }}>
        <Text style={{ fontSize: 16 }}>Info BABA</Text>
        <View>
          <View style={{ alignItems: "center" }}>
            <View style={{ width: 250, height: 170, borderRadius: 8 }}>
              <Image source={require('../assets/baba.jpg')} style={{width: undefined, height: 170, resizeMode:'cover'}} />
            </View>
            <Text>Tournamen</Text>
            <Text>
              Baba Futsal akan mengadakan turnamen tingkat kecamatan yang akab diadakan di bulan
              Januari, Ayo Daftarkan Segera Tim Mu
            </Text>
          </View>
        </View>
      </View>
    )
}