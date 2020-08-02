import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

export default function Bottomnav() {
    return(
        <View style={{ height: 60, backgroundColor: "white", flexDirection: "row", borderWidth: 0.5 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity>
            <View style={{ width: 28, height: 28 }}>
              <Image source={require('../assets/home.png')} style={{width:28, height: 28}} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "black", marginHorizontal: 5 }}>Home</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity>
            <View style={{ width: 28, height: 28 }}>
              <Image source={require('../assets/order.jpg')} style={{width: 28, height: 28}} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "black", marginHorizontal: 5 }}>Order</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity>
            <View style={{ width: 28, height: 28 }}>
              <Image source={require('../assets/help.png')} style={{width: 28, height: 28}} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "black", marginHorizontal: 5 }}>Help</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
          <TouchableOpacity>
            <View style={{ width: 28, height: 28 }}>
              <Image source={require('../assets/akun.png')} style={{width: 28, height: 28}} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "black", marginHorizontal: 5 }}>Akun</Text>
        </View>
      </View>

    )
}