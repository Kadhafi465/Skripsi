import React from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'

export default function Fasilitas() {
    return(
        <View style={{ paddingTop: 10, marginHorizontal: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: "bold" }}>Fasilitas</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row" }}
          >
            <View style={{ marginRight: 13 }}>
              <View style={{ width: 150, height: 150, borderRadius: 8 }}>
                <Image
                  style={{ width: undefined, height: 150, resizeMode: 'cover' }}
                  source={require("../assets/lapangan.png")}
                />
              </View>
              <Text>Lapangan</Text>
            </View>
            <View style={{ marginRight: 13 }}>
              <View style={{ width: 150, height: 150, borderRadius: 8 }}>
                <Image source={require('../assets/lapangan.png')} style={{width: undefined, height: 150, resizeMode: 'cover'}} />
              </View>
              <Text>Toilet</Text>
            </View>
            <View style={{ marginRight: 13 }}>
              <View style={{ width: 150, height: 150, borderRadius: 8 }}>
                <Image source={require('../assets/lapangan.png')} style={{width: undefined, height: 150, resizeMode: 'cover'}} />
              </View>
              <Text>Parkir</Text>
            </View>
            <View style={{ marginRight: 13 }}>
              <View style={{ width: 150, height: 150, borderRadius: 8 }}>
              <Image source={require('../assets/lapangan.png')} style={{width: undefined, height: 150, resizeMode: 'cover'}} />
              </View>
              <Text>Tempaat Istirahat</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 70,
                  height: 30,
                  backgroundColor: "lightblue",
                  borderRadius: 7,
                }}
              >
                <Text>See All</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    )
}