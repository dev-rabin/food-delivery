import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import * as Icon from "react-native-feather";
import {themeColors} from "../theme/index";
import Categories from "../screens/Categories.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { featured } from "@/constants";
import FeaturedRow from "./FeaturedRow"

export default function HomeScreen() {
  return (

    <GestureHandlerRootView>
      <SafeAreaView className="p-3">
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


        {/* Categories */}
        <Categories/>

        {/* Featured */}
       <ScrollView>
       <View className="mt-5">
        {console.log(featured)}
          {
            
            featured.map((item,index) => {
              return (
                <FeaturedRow
                  key={index}
                  title = {item.title}
                  description = {item.description}
                  restaurants = {item.restaurants}
                />
              )
            })
          }
        </View>
        <View className="mt-5">
        {console.log(featured)}
          {
            
            featured.map((item,index) => {
              return (
                <FeaturedRow
                  key={index}
                  title = {item.title}
                  description = {item.description}
                  restaurants = {item.restaurants}
                />
              )
            })
          }
        </View>
        <View className="mt-5">
        {console.log(featured)}
          {
            
            featured.map((item,index) => {
              return (
                <FeaturedRow
                  key={index}
                  title = {item.title}
                  description = {item.description}
                  restaurants = {item.restaurants}
                />
              )
            })
          }
        </View>
       </ScrollView>
      </SafeAreaView>
      </GestureHandlerRootView>

  )
}