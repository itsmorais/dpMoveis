import { NavigationContainer } from "@react-navigation/native";
import { CaixaProvider } from "../context/caixaContext";
import MyDrawer from "./drawer.routes";
import StackRoutes from "./stack.routes";



export default function Routes() {

  return (
    <CaixaProvider>
      <NavigationContainer>
        <StackRoutes/>        
      </NavigationContainer>
    </CaixaProvider>
  );
}
