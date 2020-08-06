import React from 'react'
import {Image, View, TextInput,Text, Button} from "react-native"

export default function Login() {
    return(
    <View style={{position:'relative'}}>
      <Image style={{position:'absolute'}} source={require('../assets/bgbg.jpg')} />
      <View style={{opacity:0.7,marginVertical: 150, marginHorizontal:30, borderRadius: 10, width: 300, height: 300, backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
     <View style={{alignItems: 'center'}}>
      <Text style={{marginVertical: 30, alignItems:'center' ,fontSize:20}}>Login</Text>
      <TextInput placeholder='username' style={{fontWeight:'bold', color: 'blue', height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}/>
      <TextInput placeholder='password' style={{marginTop: 20,fontWeight:'bold', color: 'blue', height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}/>
      <View style={{marginTop: 20}}>
      <Button style={{marginTop: 10}}
        title="Login"
        onPress={() => Alert.alert('Simple Button pressed')}/>
      </View>
        <View style= {{marginVertical: 20, marginLeft: 10}}>
          <Text style={{fontSize:12}}>Belum punya Akun? Klik DAFTAR Sekarang</Text>
        </View>
     </View>
      </View>

    </View>
    )
}