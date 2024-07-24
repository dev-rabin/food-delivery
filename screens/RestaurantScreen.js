import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "@/theme";
import DishRow from "../components/DishRow"

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  console.log("Restaurant item : ", item);

  return (
    <ScrollView>
      <View className=" relative">
        <Image className="w-full h-72" source={item.image} />
        <TouchableOpacity
          className=" absolute top-10 left-4 bg-gray-50 p-2 rounded-full shadow"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor} />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className=" -mt-12 bg-white pt-6"
      >
        <View>
          <Text className=" text-3xl font-bold p-2">{item.name}</Text>
        </View>
        <View className="p-2">
          <ScrollView className="mr-2" horizontal={true}>
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
                <Icon.MapPin
                  height="15"
                  width="15"
                  stroke="grey"
                  className="ml-2 mr-1"
                />
                <Text className="text-gray-700">Nearby, {item.address}</Text>
              </View>
            </View>
          </ScrollView>
          <View>
            <Text className=" text-gray-500 mt-2 text-xl">{item.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
