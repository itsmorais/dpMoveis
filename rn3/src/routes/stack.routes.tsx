import { createStackNavigator } from "@react-navigation/stack";
import Contato from "../screens/Contatos";
import OnboardingScreen from "../screens/Home";
import CadastroContatoScreen from "../screens/Cadastro";
import LocationScreen from "../screens/Location";
const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="Contatos" component={Contato}
                options={{ headerShown: true }} />

            <Stack.Screen name="Cadastro" component={CadastroContatoScreen}
                options={{ headerShown: true }} />

            <Stack.Screen name="Localizacao" component={LocationScreen}
                options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}