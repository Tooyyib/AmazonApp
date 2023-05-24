import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import {productsData} from "../Data";

function HomeSCreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ marginTop: 40, flexDirection: "row", paddingHorizontal: 10 }}>
        <View
          style={{
            flex: 1,
            height: 45,
            borderRadius: 10,
            borderColor: "#7d1b78",
            borderWidth: 2,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder="Search for products"
            style={{ flex: 1, fontSize: 18, width: "90%" }}
          />
          <FontAwesome name="search" size={24} color="#7d1b78" />
        </View>
        <View
          style={{
            backgroundColor: "#7d1b78",
            height: 45,
            width: 45,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}>
          <MaterialIcons name="tune" size={30} color="white" />
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "#7d1b78",
          }}>
          Product List
        </Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, marginTop: 20 }}
        data={productsData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={function () {
              navigate("Details", item);
            }}
            style={{
              height: 150,
              borderRadius: 15,
              backgroundColor: "white",
              marginVertical: 10,
              marginHorizontal: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-between",
              elevation: 15,
            }}>
            <View style={{ width: "40%" }}>
              <Image
                source={{ uri: item.imageUrl1 }}
                resizeMode="contain"
                style={{ height: "90%", width: 130 }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: "90%",
                width: "40%",
                justifyContent: "center",
              }}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {item.name}
                </Text>
              </View>
              <View style={{ fontSize: 14, fontWeight: "bold" }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#7d1b78",
                  }}>
                  ₦{item.price}
                </Text>
              </View>
              <Text style={{ color: "gray", fontSize: 12 }}>
                {item.description}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}>
                <Image
                  source={require("../../assets/images/star.png")}
                  style={{ height: 16, width: 16 }}
                />
                <Text>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HomeSCreen;