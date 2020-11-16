import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Login( {navigation} ) {
  const handleDaftar = () => {
navigation.navigate('Daftar')
  }

  const handleHome = () => {
    navigation.navigate('Home')
  }
  return ( 
    <View style={{ position: "relative" }}>
      <Image
        style={{ position: "absolute" }}
        source={require("../assets/papantulis.jpg")}
      />
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.titletext}>Login</Text>
          <TextInput placeholder="username" style={styles.userinput} />
          <TextInput placeholder="password" style={styles.userinput} />
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={() => handleHome()} style={styles.buttonBorder}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=> handleDaftar()} >
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
