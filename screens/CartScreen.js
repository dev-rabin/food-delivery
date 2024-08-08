import { themeColors } from "@/theme";
import { SafeAreaView, Text, View } from "react-native";
import * as Icon from "react-native-feather";

export default function CartScreen() {
    return (
        <SafeAreaView>
            <View className="flex-row justify-center items-center m-3">
                <Icon.ArrowLeft strokeWidth={3} stroke={"white"} className=" bg-orange-400 rounded-full p-3" />
                <View className="mx-auto">
                    <Text className="text-2xl font-bold">Your Cart</Text>
                    <Text className="text-center text-gray-400">Papa Johns</Text>
                </View>
            </View>
        </SafeAreaView>
    )
};
