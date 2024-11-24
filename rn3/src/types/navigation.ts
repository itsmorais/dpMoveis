import { ParamListBase } from "@react-navigation/native";
import { LatLng } from "react-native-maps";

export interface RootStackParamList extends ParamListBase {
  Home: undefined; // A tela Home não espera parâmetros
  Onboarding: undefined;
  Location:{nome:string,coordenada:LatLng}
}