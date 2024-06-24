const { NavigationContainer } = require("@react-navigation/native");
const { createNativeStackNavigator } = require("@react-navigation/native-stack");
import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

