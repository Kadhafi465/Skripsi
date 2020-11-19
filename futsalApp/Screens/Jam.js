import React, { useState } from 'react';
import {View, ImageBackground, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import papan from '../assets/papantulis.jpg';
import {RadioButton} from 'react-native-paper';

const Jam = ({navigation}) => {
    const [value, setValue] = React.useState('first');

    const handleBayar = () => {
        navigation.navigate('Bayar')
    }

    return(
        <View style={{flex:1 ,marginTop: 15}}>
      <ImageBackground source={papan} style={{flex:1}}>
      <ScrollView>
      <View
          style={{
            width: 375,
            height: 60,
            opacity: 0.7,
            backgroundColor: "white",
            marginTop: 30,
            justifyContent: "center",
          }}>

          <View 
          style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            marginHorizontal: 20}}>
          <Text 
          style={{
            fontSize: 19,
            fontStyle: "normal"
            }}>Pilih Jadwal
            </Text>

          <Image style={{height: 30, width: 60}} source={require('../assets/babalogo.png')}/>
          </View>
        </View>

<RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
     <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 20}}>
      <View style={{width: 150 }}>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="08:00-09:00" />
        <Text style={{color: 'white', paddingTop: 5}}>08:00-09:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="09:00-10:00" />
        <Text style={{color: 'white', paddingTop: 5}}>09:00-10:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="10:00-11:00" />
        <Text style={{color: 'white', paddingTop: 5}}>10:00-11:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="11:00-12:00" />
        <Text style={{color: 'white', paddingTop: 5}}>11:00-12:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="12:00-13:00" />
        <Text style={{color: 'white', paddingTop: 5}}>12:00-13:00</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <RadioButton value="13:00-14:00" />
        <Text style={{color: 'white', paddingTop: 5}}>13:00-14:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="14:00-15:00" />
        <Text style={{color: 'white', paddingTop: 5}}>14:00-15:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="15:00-16:00" />
        <Text style={{color: 'white', paddingTop: 5}}>15:00-16:00</Text>
      </View>
      </View>
      <View style={{width: 150}}>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="16:00-17:00" />
        <Text style={{color: 'white', paddingTop: 5}}>16:00-17:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="17:00-18:00" />
        <Text style={{color: 'white', paddingTop: 5}}>17:00-18:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="18:00-19:00" />
        <Text style={{color: 'white', paddingTop: 5}}>18:00-19:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="19:00-20:00" />
        <Text style={{color: 'white', paddingTop: 5}}>19:00-20:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="20:00-21:00" />
        <Text style={{color: 'white', paddingTop: 5}}>20:00-21:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="21:00-22:00" />
        <Text style={{color: 'white', paddingTop: 5}}>21:00-22:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="22:00-23:00" />
        <Text style={{color: 'white', paddingTop: 5}}>22:00-23:00</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <RadioButton value="23:00-24:00" />
        <Text style={{color: 'white', paddingTop: 5}}>23:00-24:00</Text>
      </View>

      </View>
       </View> 
    </RadioButton.Group>

      <TouchableOpacity onPress={()=> handleBayar()}>
        <View
          style={{
            height: 40,
            backgroundColor: "purple",
            opacity: 0.7,
            marginHorizontal:30,
            marginTop: 15,
            borderColor: 'yellow',
            borderRadius: 18,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20
          }}
        >
          <Text style={{color: 'yellow'}}>Payment</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
      </ImageBackground>
      
    </View>
    );
  }

export default Jam;
