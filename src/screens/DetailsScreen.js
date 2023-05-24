import { View, Text, Image } from "react-native";
import React from "react";

const DetailsScreen = ({ route: { params } }) => {
  const name = params.name;
  const image = params.imageUrl1;
  const price = params.price;
  const description = params.description;
  const rating = params.rating;

  return (
    <View>
      <Text style={{ fontSize: 40 }}>{name}</Text>

      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style={{ height: "80%" }}
      />
    </View>
  );
};

export default DetailsScreen;