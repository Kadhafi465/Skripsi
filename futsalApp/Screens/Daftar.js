import React from "react";
import { Image, View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function Daftar ( {navigation} ) {
  return (
    <View style={{ position: "relative" }}>
      <Image style={{ position: "absolute" }} source={require("../assets/papantulis.jpg")} />
      <View style={styles.itemblock}>
        <Text style={styles.texttitle}>Register</Text>
        <TextInput placeholder="Nama Lengkap" style={styles.inputtext} />
        <TextInput placeholder="No. Handphone" style={styles.inputtext} />
        <TextInput placeholder="Alamat" style={styles.inputtext} />
        <TextInput placeholder="Tgl Lahir" style={styles.inputtext} />
        <TextInput placeholder="E-Mail" style={styles.inputtext} />
        <TextInput placeholder="password" style={styles.inputtext} />
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.buttonBorder}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 15, color: "white", textAlign: "center", marginTop: 20 }}>
            Sudah punya Akun? LOGIN
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemblock: {
    marginVertical: 50,
    marginHorizontal: 10,
    alignItems: "center",
  },
  subtitle: {
    marginVertical: 10,
    fontWeight: "bold",
    color: "white",
  },
  texttitle: {
    fontWeight: "normal",
    fontSize: 30,
    color: "white",
    marginVertical: 20,
  },
  inputtext: {
    backgroundColor:'grey',
    fontWeight: "bold",
    color: "white",
    height: 40,
    width: 280,
    borderColor: "yellow",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 10,
  },
  buttonBorder: {
    width: 280,
    height: 40,
    backgroundColor: "purple",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 7,
  },
});
