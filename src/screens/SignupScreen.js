  import { View, Text, StyleSheet, TouchableOpacity, TextInput, } from "react-native";
  import React from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  


  
  const SignupScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBack}>
          <MaterialIcons name="arrow-back-ios" size={20} color="black" />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={{ marginTop: 1 }}>
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "#7d1b78" }}>
              Sign up
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <TextInput
              placeholder="Surname"
              style={{
                borderColor: "gray",
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            />
            <TextInput
              placeholder="OtherName"
              style={{
                borderColor: "gray",
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: "white",
              }}
            />
            <TextInput
              placeholder="Email"
              style={{
                borderColor: "gray",
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: "white",
              }}
            />
            <TextInput
              placeholder="Phone No"
              style={{
                borderColor: "gray",
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: "white",
              }}
            />
            <TextInput
              placeholder="Password"
              style={{
                borderColor: "gray",
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: "white",
              }}
            />
            <TextInput
              placeholder="Confirm Password"
              style={{
                borderColor: "gray",
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: "white",
              }}
            />
          </View>
          <TouchableOpacity
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
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 30,
              justifyContent: "center",
              flexDirection: "row",
            }}>
            <Text>Already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ fontWeight: "700", color: "#7d1b78", marginLeft: 15 }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default SignupScreen;
  
  
  const styles = StyleSheet.create({
    goBack: {
      marginTop: 40,
      marginLeft: 15,
      width: 35,
      height: 35,
      backgroundColor: "lightgray",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });