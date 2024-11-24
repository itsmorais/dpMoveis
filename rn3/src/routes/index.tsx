import { NavigationContainer } from "@react-navigation/native";
import { ContatoProvider } from "../context/contatoContext";
import StackRoutes from "./stack.routes";



export default function Routes() {

  return (
    <ContatoProvider>
      <NavigationContainer>
        <StackRoutes/>        
      </NavigationContainer>
    </ContatoProvider>
  );
}
