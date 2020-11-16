import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

export default function Bottomnav ( props ) {
    return(
        <View style={{ opacity: 0.5, height: 60, backgroundColor: "grey", flexDirection: "row", borderWidth: 0.5 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
            <View style={{ width: 28, height: 28 }}>
              <Image source={require('../assets/homelogo.png')} style={{width:28, height: 28}} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "green", marginHorizontal: 5 }}>Home</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity onPress={()=> props.navigation.navigate("Order")}>
            <View style={{ width: 28, height: 28 }}>
              <Image source={require('../assets/orderss.png')} style={{width: 35, height: 40}} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "lightblue", marginHorizontal: 5, paddingTop: 2 }}>Order</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Help")}>
            <View style={{ width: 28, height: 28 }}>
              <Image source={require('../assets/bantuan.png')} style={{width: 28, height: 30}} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "lightblue", marginHorizontal: 5 }}>Help</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity onPress={()=> props.navigation.navigate("Akun")}>
            <View style={{ width: 28, height: 28 }}>
              <Image source={require('../assets/akuun.png')} style={{width: 28, height: 30}} />
            </View>
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: "lightblue", marginHorizontal: 5 }}>Akun</Text>
        </View>
      </View>

    )
}