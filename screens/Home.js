import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import styles from "../styles/Styles";
import Banco from "./Banco";

export default function Home({ navigation }) {
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Banco" }],
    });
  };

  return (
    <View style={styles.view}>
      <Button text="Começar" onPress={() => navigation.navigate("Banco")} />
    </View>
  );
}
