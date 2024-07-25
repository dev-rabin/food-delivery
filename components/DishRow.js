import { Image, Text, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";


export default function DishRow({ item }) {
  return (
    <View className="flex-row items-center bg-white p-2 rounded-xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        source={item.image}
        style={{ height: 100, width: 100 }}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-lg">{item.name}</Text>
          <Text className=" text-gray-500">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className=" text-lg text-gray-700 font-bold">
            ${item.price}
          </Text>
          <View className="flex-row items-center">
            <View>
              <TouchableOpacity
                onPress={() => { console.log("Minus Pressed!") }}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor }}
              >
                <Icon.Minus strokeWidth={2} height={20} stroke="white" />
              </TouchableOpacity>
            </View>
            <Text className="mx-2">
              2
            </Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => { console.log("Plus Pressed!") }}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor }}
              >
                <Icon.Plus strokeWidth={2} height={20} stroke="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
