import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, TextInput, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Login({ navigation }) {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      // saving error
    }
  };

  const handleDaftar = () => {
    navigation.navigate("Daftar");
  };

  const handleHome = () => {
    // console.warn(value.email, value.password);
    axios({
      method: "post",
      // url: "http://localhost:3001/login",
      url: "http://127.0.0.1:3001/login",
      data: {
        email: value.email,
        password: value.password,
      },
    })
      .then((data) => {
        // console.warn(data);
        console.log(data);
      })
      .catch((err) => {
        console.warn("error bos");
        console.log(err);
      });
    // navigation.navigate("Home");
  };
  return (
    <View style={{ position: "relative" }}>
      <Image style={{ position: "absolute" }} source={require("../assets/papantulis.jpg")} />
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.titletext}>Login</Text>
          <TextInput placeholder="email" style={styles.userinput} value={value.email} onChangeText={(text) => setValue({ ...value, email: text })} />
          <TextInput
            placeholder="password"
            style={styles.userinput}
            value={value.password}
            onChangeText={(text) => setValue({ ...value, password: text })}
          />
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={() => handleHome()} style={styles.buttonBorder}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => handleDaftar()}>
            <View style={{ marginVertical: 30, textAlign: "center" }}>
              <Text style={{ fontSize: 15 }}>Belum punya Akun? Daftar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 0.5,
    marginVertical: 160,
    marginHorizontal: 30,
    borderRadius: 30,
    width: 300,
    height: 330,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "yellow",
    borderWidth: 5,
  },
  titletext: {
    marginTop: 30,
    alignItems: "center",
    fontSize: 30,
    fontWeight: "normal",
    color: "white",
  },
  userinput: {
    fontWeight: "bold",
    color: "white",
    height: 40,
    width: 250,
    borderColor: "purple",
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonBorder: {
    width: 250,
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
