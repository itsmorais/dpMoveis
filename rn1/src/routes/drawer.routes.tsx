import { createDrawerNavigator } from '@react-navigation/drawer';
import Mania from '../screens/Mania';
import Mega from '../screens/Mega';
import Quina from '../screens/Quina';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName='Mega'>
            <Drawer.Screen name="Quina" component={Quina} />
            <Drawer.Screen name="Mania" component={Mania} />
            <Drawer.Screen name="Mega" component={Mega} />

        </Drawer.Navigator>
    );
}