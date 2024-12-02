import { NavigationContainer } from "@react-navigation/native";
import { BookProvider } from "../context/bookContext";
import StackRoutes from "./stack.routes";



export default function Routes() {

  return (
    <BookProvider>
      <NavigationContainer>
        <StackRoutes/>        
      </NavigationContainer>
    </BookProvider>
  );
}
