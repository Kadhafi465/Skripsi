import React from 'react'
import {Image, View, TextInput,Text, Button} from "react-native"

export default function Daftar() {
    return(
        <View style={{position:'relative'}}>
      <Image style={{position:'absolute'}} source={require('../assets/bgbg.jpg')}/>
    <View style={{marginVertical: 30, marginHorizontal: 10}}>
      <Text style={{marginBottom:15, fontWeight:'bold', fontSize: 20}}>Register</Text>
      <Text>Nama Lengkap</Text>
      <TextInput placeholder='Nama Lengkap' style={{backgroundColor:'white', marginTop: 10,fontWeight:'bold', color: 'blue', height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}/>
      <Text style={{marginVertical: 10}}>No.Handphone</Text>
      <TextInput placeholder='No. Handphone' style={{backgroundColor: 'white',fontWeight:'bold', color: 'blue', height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}/>
      <Text style={{marginVertical: 10}}>Alamat</Text>
      <TextInput placeholder='Alamat' style={{backgroundColor: 'white',fontWeight:'bold', color: 'blue', height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}/>
      <Text style={{marginVertical: 10}}>Tanggal Lahir</Text>
      <TextInput placeholder='Tgl Lahir' style={{backgroundColor: 'white',fontWeight:'bold', color: 'blue', height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}/>
      <Text style={{marginVertical: 10}}>E-Mail</Text>
      <TextInput placeholder='E-Mail' style={{backgroundColor: 'white',fontWeight:'bold', color: 'blue', height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}/>
      <Text style={{marginVertical: 10}}>Password</Text>
      <TextInput placeholder='password' style={{backgroundColor: 'white',fontWeight:'bold', color: 'blue', height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}/>
      <View style={{marginTop: 20}}>
      <Button style={{marginTop: 10}}
        title="Daftar"
        onPress={() => Alert.alert('Simple Button pressed')}/>
        </View>
    </View>
    </View>

    )
}