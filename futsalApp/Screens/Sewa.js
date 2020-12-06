import React, { Component } from "react";
import { View, ImageBackground, Text, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import papan from "../assets/papantulis.jpg";
import DatePicker from "react-native-datepicker";

export default class Sewa extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2020-11-01" };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, marginTop: 15 }}>
        <ImageBackground source={papan} style={{ flex: 1 }}>
          <ScrollView>
            <View
              style={{
                width: 375,
                height: 60,
                opacity: 0.7,
                backgroundColor: "white",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    fontStyle: "normal",
                  }}
                >
                  Pilih Jadwal
                </Text>

                <Image style={{ height: 30, width: 60 }} source={require("../assets/babalogo.png")} />
              </View>
            </View>

            <View style={{ marginVertical: 20, marginLeft: 30 }}>
              <Text style={{ fontSize: 16, color: "yellow" }}>Pilih Tanggal :</Text>
            </View>
            <View
              style={{
                marginHorizontal: 25,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                opacity: 0.2,
                width: 310,
                height: 100,
                opacity: 0.6,
                borderRadius: 10,
              }}
            >
              <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2020-11-01"
                maxDate="2020-12-31"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {
                  this.setState({ date: date });
                }}
              />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Jam')}>
              <View
                style={{
                  height: 40,
                  backgroundColor: "purple",
                  opacity: 0.7,
                  marginHorizontal: 30,
                  marginTop: 15,
                  borderColor: "yellow",
                  borderRadius: 18,
                  borderWidth: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 30,
                }}
              >
                <Text style={{ color: "yellow" }}>Next</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
