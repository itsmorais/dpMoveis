import React from "react";
import { Text } from "react-native";
import { styles } from "../../themes";
import { SafeAreaView } from "react-native-safe-area-context";
import Balls from "../../components/Balls";
import { MegaHooks } from "../../hooks/megaHooks";

const Mega = () => {

  const mega = MegaHooks()


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MEGA-SENA</Text>
      {mega ? <>
        <Balls values={mega.dezenas} colors="#209869" font="#fff"/>
        <Text style={styles.p}>{mega.dataPorExtenso}</Text>
      </>
        :
        <Text>Carregando...</Text>
      }

    </SafeAreaView>
  );
};

export default Mega;
