import React, { useState } from 'react';
import {View, ImageBackground, Text, Image, ScrollView, Button } from 'react-native';
import papan from '../assets/papantulis.jpg';
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import moment from 'react-native-modal-datetime-picker'

  const Sewa = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      // chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
      hideDatePicker();
    };

    return (
        <View style={{flex:1 ,marginTop: 15}}>
      <ImageBackground source={papan} style={{flex:1}}>
      <ScrollView>
      <View
          style={{
            width: 375,
            height: 60,
            opacity: 0.5,
            backgroundColor: "white",
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 20}}>
          <Text style={{ fontSize: 19, fontStyle: "normal" }}>Pilih Jadwal</Text>
          <Image style={{height: 30, width: 60}} source={require('../assets/babalogo.png')}/>
          </View>
        </View>
      <View>
      <Text style={{color: 'red', fontSize: 20}}>
        {/* {setDatePickerVisibility.chosenDate} */}
      </Text>
      <Button title="Pilih Tanggal dan Jam" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>
      </ScrollView>
      </ImageBackground>
      
    </View>
    );
  }

export default Sewa;