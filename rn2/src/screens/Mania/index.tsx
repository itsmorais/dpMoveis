import React from "react";
import { Text } from "react-native";
import { styles } from "../../themes";
import { ManiaHooks } from "../../hooks/maniaHook";
import { SafeAreaView } from "react-native-safe-area-context";
import Balls from "../../components/Balls";

const Mania = () => {

  const mania = ManiaHooks()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TIMEMANIA</Text>
      {mania ? <>
        <Balls values={mania.dezenas} colors="#FFF600" font="#049645" />
        <Text style={styles.p}>{mania.dataPorExtenso}</Text>
      </>
        :
        <Text>Carregando...</Text>
      }

    </SafeAreaView>
  );
};

export default Mania;
