import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RestaurantCard from "../screens/RestaurantCard";

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View className=" flex-row justify-between items-center px-4">
        <View>
          <Text className=" font-bold text-lg">{title}</Text>
          <Text className=" text-xs text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-semibold text-red-600">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal : 15
      }}

      className="overflow-visible py-5"
      >
      {
        restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard
              key={index}
              item ={restaurant}
            />
          )
        })
      }
      </ScrollView>
    </View>
  )
}