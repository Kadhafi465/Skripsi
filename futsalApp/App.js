import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{flex: 1, backgroundColor: 'darkwhite'}}>
        <View style={{ backgroundColor: "white", height: 170, marginTop: 30, flex: 1 }}>
          <Text> HEader baba</Text>
        </View>
        <View>
          <View
            style={{
              height: 180,
              backgroundColor: "lightgreen",
              marginHorizontal: 15,
              borderRadius: 8,
            }}
          >
            <Text> Harga Sewa </Text>
            <Text> Senin-Jum'at</Text>
            <Text> Pukul 08:00 - 16:00 : Rp 130.000 @jam</Text>
            <Text> Pukul 17:00 - 23:00 : Rp 180.000 @jam</Text>
            <Text> Sabtu - Minggu </Text>
            <Text> Pukul 08:00 - 16:00 : Rp 150.000 @jam</Text>
            <Text> Pukul 17:00 - 23:00 : Rp 200.000 @jam</Text>
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

        <View style={{ paddingTop: 10, marginHorizontal: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: "bold" }}>Fasilitas</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row" }}
          >
            <View style={{ marginRight: 13 }}>
              <View style={{ width: 150, height: 150, borderRadius: 8 }}></View>
              <Text>Lapangan</Text>
            </View>
            <View style={{ merginRight: 13 }}>
              <View style={{ width: 150, height: 150, borderRadius: 8 }}></View>
              <Text>Toilet</Text>
            </View>
            <View style={{ marginRight: 13 }}>
              <View style={{ width: 150, height: 150, borderRadius: 8 }}></View>
              <Text>Parkir</Text>
            </View>
            <View style={{ marginRight: 13 }}>
              <View style={{ width: 150, height: 150, borderRadius: 8 }}></View>
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

        <View style={{ marginTop: 15, marginHorizontal: 15 }}>
          <Text style={{ fontSize: 16 }}>Info BABA</Text>
          <View>
            <View style={{ alignItems: "center" }}>
              <View style={{ width: 250, height: 170, borderRadius: 8 }}></View>
              <Text>Tournamen</Text>
              <Text>
                Baba Futsal akan mengadakan turnamen tingkat kecamatan yang akab diadakan di bulan
                Januari, Ayo Daftarkan Segera Tim Mu
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ height: 60, backgroundColor: "white", flexDirection: "row", borderWidth: 0.5 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity>
          <View style={{ width: 28, height: 28 }}></View>
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black', marginHorizontal: 5}}>Home</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity>
          <View style={{ width: 28, height: 28 }}></View>
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black', marginHorizontal: 5}}>Order</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity>
          <View style={{ width: 28, height: 28 }}></View>
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black', marginHorizontal: 5}}>Help</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity>
          <View style={{ width: 28, height: 28 }}></View>
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black', marginHorizontal: 5}}>Akun</Text>
        </View>
      </View>
    </View>
  );
}
