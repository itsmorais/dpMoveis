import { NavigationContainer } from "@react-navigation/native";
import {  CaixaProvider } from "../context/caixaContext";
import MyDrawer from "./drawer.routes";




export default function Routes() {

  return (
    <NavigationContainer>
      <CaixaProvider>
      <MyDrawer />
      </CaixaProvider>
    </NavigationContainer>
  );
}
