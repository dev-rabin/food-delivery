import { Image, Text, View } from "react-native";

export default function DishRow ({item})  {
    const dishesItems = item.dishes;
    console.log("dishesItems : ", dishesItems);
   
  return (
    <View className="flex-row items-center bg-white p-3 rounded-xl mb-3 mx-2">
    <Image className="rounded-3xl" source={item.image}/>
    </View>
  )
}
