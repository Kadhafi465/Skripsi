import React from "react";
import { View, ScrollView, Text } from "react-native";
import Bottomnav from "../Components/Bottomnav";

export default function Order() {
    return(
        <View style={{flex:1}}>
      <ScrollView>
      <View style={{height: 50,backgroundColor: 'lightblue', marginTop: 30, justifyContent:'center'}}>
          <Text style={{fontSize: 17, fontStyle:'normal', justifyContent: 'center', marginLeft: 20}}>Order</Text>
        </View>
      </ScrollView>
      <Bottomnav />
    </View>
    )
}