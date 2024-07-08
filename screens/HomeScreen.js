import { SafeAreaView, StatusBar, Text, TextInput, View } from "react-native";
import * as Icon from "react-native-feather";
import {themeColors} from "../theme/index"

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView className="bg-white p-3">
        <StatusBar barStyle="dark-content" />

        {/* Search Bar */}
        <View className="flex-row items-center space-x-2 px-4 pb-2">
          <View className="flex-row flex-1 items-center rounded-full border p-3 border-gray-300">
            <Icon.Search height="25" width="25" stroke="grey" />
            <TextInput placeholder="Restaurants" className=" ml-1 flex-1" />
            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-400">
              <Icon.MapPin height="21" width="21" stroke="grey" />
              <Text>
                Haryana, IND
              </Text>
            </View>
          </View>
          <View style={{backgroundColor : themeColors.bgColor}} className="p-3 rounded-full">
            <Icon.Sliders height="21" width="21" strokeWidth={2.5} stroke="white"/>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}