import { createStackNavigator } from "@react-navigation/stack";
import Livros from "../screens/Livros";
import OnboardingScreen from "../screens/Home";
const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="Livros" component={Livros}
                options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}