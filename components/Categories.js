import { ScrollView, View,Text, Image } from "react-native";
import { categories } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

export default function Categories () {
    const [isActiveCategory , setIsActiveCategory] = useState(null);

    return (
        <View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator = {false}
            className=" overflow-visible"
            contentContainerStyle = {
                {
                    paddingHorizontal : 15
                }
            }
            >

            {
                categories.map((category,index) => {
                    let isActive = category.id==isActiveCategory;
                    let btnClass = isActive ? " bg-gray-600" : "bg-gray-200";
                    let textClass = isActive ? " font-semibold text-grey-800" : "text-grey-500"

                    return (
                        <View key={index} className=" flex justify-center items-center mr-6">
                            <TouchableOpacity
                            onPress={()=>setIsActiveCategory(category.id)}
                            className={"p-3 rounded-full shadow bg-gray-200" + btnClass}>
                            <Image className=" mx-auto" style={{width:45, height:45 }} source={category.image}/>
                            </TouchableOpacity>
                             <Text className={" text-center text-sm" + textClass}>{category.name}</Text>
                        </View>
                    )
                })
            }

            </ScrollView>
        </View>
    )

    
}