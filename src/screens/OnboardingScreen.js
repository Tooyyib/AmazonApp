import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, } from "react-native";
import React from 'react';





import { MaterialIcons } from "@expo/vector-icons";

function OnboardScreen({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/bags.jpg")}
        resizeMode="cover"
        style={{
          height: "100%",
          opacity: 0.9,
        }}>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <View style={{ flex: 2 }}></View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "white",
                color: "white",
                textShadowColor: "black",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
              }}>
              Welcome to <Text style={{ color: "yellow" }}>Amazon</Text> online
              Shopping.
            </Text>
            <Text
              style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                textShadowColor: "black",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
              }}>
              Which property do you want today ?
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View
              style={{
                height: 6,
                width: 30,
                backgroundColor: "blue",
                borderRadius: 50,
              }}></View>
            <View
              style={{
                height: 6,
                width: 12,
                backgroundColor: "white",
                borderRadius: 50,
                marginLeft: 5,
              }}></View>
            <View
              style={{
                height: 6,
                width: 12,
                backgroundColor: "white",
                borderRadius: 50,
                marginLeft: 5,
              }}></View>
          </View>

          <View style={{ width: "70%", marginBottom: 50 }}>
            <TouchableOpacity
              onPress={function () {
                navigation.navigate("Login");
              }}
              style={{
                backgroundColor: "#7d1b78",
                padding: 15,
                borderRadius: 5,
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}>
                Get Started
              </Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default OnboardScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    // paddingHorizontal: 10,
    // justifyContent: "space-between",
    // paddingBottom: 40,
  },
});
