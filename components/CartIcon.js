import { themeColors } from "@/theme";
import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function CartIcon() {
    const navigation = useNavigation();
    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
            onPress={()=>{navigation.navigate("CartScreen")}}
                style={{ backgroundColor: themeColors.bgColor }}
                className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
            >
                <View
                    className="p-2 px-4 rounded-full"
                    style={{ backgroundColor: "white" }}
                >
                    <Text className="font-extrabold text-orange-500 text-lg">
                        2
                    </Text>
                </View>
                <Text className="text-white font-extrabold text-lg">
                    View Cart
                </Text>
                <Text className="text-white font-extrabold text-lg">
                    $20
                </Text>
            </TouchableOpacity>

        </View>
    )
};
