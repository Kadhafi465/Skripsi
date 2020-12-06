import React, { useState } from "react";
import { Image, View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";

export default function Daftar({ navigation }) {
  const [value, setValue] = useState({
    email: "",
    password: "",
    role: "user",
    nama: "",
    alamat: "",
    telepon: "",
    ttl: "",
  });

  const handdleRegister = () => {
    console.log(value);
    axios({
      method: "post",
      url: "https://morning-journey-70592.herokuapp.com/register",
      data: {
        email: value.email,
        password: value.password,
        role: "user",
        nama: value.nama,
        alamat: value.alamat,
        telepon: value.telepon,
        ttl: value.ttl,
      },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={{ position: "relative" }}>
      <Image style={{ position: "absolute" }} source={require("../assets/papantulis.jpg")} />
      <View style={styles.itemblock}>
        <Text style={styles.texttitle}>Register</Text>
        <TextInput
          placeholder="Nama Lengkap"
          style={styles.inputtext}
          value={value.nama}
          onChangeText={(text) => setValue({ ...value, nama: text })}
        />
        <TextInput
          placeholder="No. Handphone"
          style={styles.inputtext}
          value={value.telepon}
          onChangeText={(text) => setValue({ ...value, telepon: text })}
        />
        <TextInput placeholder="Alamat" style={styles.inputtext} value={value.alamat} onChangeText={(text) => setValue({ ...value, alamat: text })} />
        <TextInput placeholder="Tgl Lahir" style={styles.inputtext} value={value.ttl} onChangeText={(text) => setValue({ ...value, ttl: text })} />
        <TextInput placeholder="E-Mail" style={styles.inputtext} value={value.email} onChangeText={(text) => setValue({ ...value, email: text })} />
        <TextInput
          placeholder="password"
          style={styles.inputtext}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
        />
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.buttonBorder} onPress={() => handdleRegister()}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 15, color: "white", textAlign: "center", marginTop: 20 }}>Sudah punya Akun? LOGIN</Text>
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
    backgroundColor: "grey",
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
