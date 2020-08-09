import React from "react";
import { StyleSheet, Image, View, TextInput, Text, Button, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View style={{ position: "relative" }}>
      <Image style={{ position: "absolute" }} source={require("../assets/bgbg.jpg")} />
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.titletext}>Login</Text>
          <TextInput placeholder="username" style={styles.userinput} />
          <TextInput placeholder="password" style={styles.userinput} />
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity style={styles.buttonBorder}>
              <Text style={styles.buttonText}>login</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 20, textAlign: "center" }}>
            <Text style={{ fontSize: 15 }}>Belum punya Akun? Daftar</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 0.8,
    marginVertical: 200,
    marginHorizontal: 40,
    borderRadius: 30,
    width: 300,
    height: 300,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titletext: {
    marginTop: 30,
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  userinput: {
    fontWeight: "bold",
    color: "blue",
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
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
