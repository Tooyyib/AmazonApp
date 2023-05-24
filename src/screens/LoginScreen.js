import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";




const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 15 }}>
        <View style={{ marginTop: 80 }}>
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "#7d1b78" }}>
            Login
          </Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <TextInput
            placeholder="eMail"
            style={{
              borderColor: "gray",
              borderWidth: 2,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Password"
            style={{
              borderColor: "gray",
              borderWidth: 2,
              padding: 12,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}
          style={{
            marginTop: 20,
            backgroundColor: "#7d1b78",
            padding: 13,
            borderRadius: 5,
          }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
            flexDirection: "row",
          }}>
          <Text>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{ fontWeight: "700", color: "#7d1b78", marginLeft: 10 }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
