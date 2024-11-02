import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, useEffect } from "react";
import MyDrawer from "./drawer.routes";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function StackRoutes() {
    const [isOnboardingCompleted, setIsOnboardingCompleted] = useState<boolean>(false);


    // LÓGICA PARA SETAR O ONBOARDING=True APÓS 10 SEGUNDOS
    useEffect(() => {
        const checkOnboardingStatus = async () => {
            setTimeout(() => {
                setIsOnboardingCompleted(true)
            }, 10000);
        };
        checkOnboardingStatus();
    }, []);

    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: !(route.name === "Home")
            })}>


            {/*CASO O STATUS DO ONBOARDING SEJA false, renderiza a tela Home*/}
            {!isOnboardingCompleted && (
                <Stack.Screen name="Onboarding" component={Home} options={{ headerShown: false }} />
            )}

            <Stack.Screen name="Home" component={MyDrawer} />

        </Stack.Navigator>
    );
}