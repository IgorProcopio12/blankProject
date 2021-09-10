import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet, View, SafeAreaView, Switch, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import {  TextInput } from "react-native-paper";

import Button from "../components/Button";
import styles from "../styles/Styles";

export default function Banco({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState(false);

  const confirmarOperacao = () => {};

  const reset = () => {
    setName("");
    setAge("");
    setGender("");
    setValue(0);
    setType(false);
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Text style={styles.title}>Cadastro</Text>
      <div>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          value={name}
          mode="outlined"
          onChangeText={setName}
          style={styles.input}
          placeholder="Digite Seu Nome"
        ></TextInput>
      </div>
      <div>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          value={age}
          id="name"
          onChangeText={setAge}
          mode="outlined"
          style={styles.input}
          placeholder="Digite Sua Idade"
          keyboardType="numeric"
        ></TextInput>
      </div>
      <div>
        <Text style={styles.label}>Gênero:</Text>
        <Picker
          style={{
            height: 30,
            width: 238,
            marginTop: 10,
            marginBottom: 20,
            backgroundColor: "#343732",
            color: "white",
          }}
          selectedValue={gender}
          onValueChange={setGender}
        >
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
        </Picker>
      </div>
      <div>
        <Text style={styles.label}>Limite Inicial - R$: {value}</Text>
        <Slider
          style={{
            height: 30,
            width: 320,
            marginTop: 10,
            marginLeft: 30,
            marginBottom: 20,
          }}
          maximumValue={20000}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={value}
          onValueChange={setValue}
        />
      </div>
      <div>
        <Text style={{ fontSize: 16, color: "chartreuse", margin: 30 }}>
          Estudante:
        </Text>
        <Switch style={styles.type} value={type} onValueChange={setType} />

      </div>
    </SafeAreaView>
  );
}
