import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Icon from "react-native-feather";

export default function RestaurantCard({ item }) {
  return (
    <TouchableWithoutFeedback>
      <View className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Icon.Star height="21" width="21" color="orange" />
            <Text className="text-green-700">{item.stars}</Text>
            <Text className="text-gray-700">
              ( {item.reviews} reviews) .{" "}
              <Text className="font-semibold">{item.category}</Text>
            </Text>
          </View>
          <View>
            <View className=" flex-row items-center">
              <Icon.MapPin height="15" width="15" stroke="grey" />
              <Text className="ml-2 text-gray-700">Nearby, {item.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
