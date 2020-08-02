import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Bottomnav from "../Components/Bottomnav";

export default function Akun() {
    return(
        <View style={{flex:1}}>
      <ScrollView>
        <View style={{height: 50,backgroundColor: 'lightblue', marginTop: 30, justifyContent:'center'}}>
          <Text style={{fontSize: 17, fontStyle:'normal', justifyContent: 'center', marginLeft: 20}}>Akun</Text>
        </View>
        <View style={{ height: 150, backgroundColor: 'lightblue', marginTop: 50, borderRadius: 10, marginHorizontal:15}}>
          <Text style={{marginTop: 10, marginLeft: 10}}>Nama : </Text>
          <Text style={{marginLeft: 10, marginTop: 10}}>No.Telpon :</Text>

        </View>
        <View style={{marginTop: 80, width: 80, height: 40, backgroundColor:'red', borderRadius: 10, alignItems: 'center', marginHorizontal: 150}}>
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Bottomnav />
    </View>
    )
}