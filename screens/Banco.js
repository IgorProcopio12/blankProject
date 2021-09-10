import React, { useEffect, useCallback, useState, useRef } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { Switch } from "react-native-paper";
import { TextInput } from "react-native-paper";

import styles from "../styles/Styles";
import ProcessButton from "../components/ProcessButton";
import ClearButton from "../components/ClearButton";

export default function Banco({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setSelectedGender] = useState("Masculino");
  const [value, setValue] = useState(0);
  const [type, setType] = useState(false);

  const confirmarOperacao = () => {
    if (name && age && value > 0) {
      const types = type ? "Universitária" : "Normal";
      alert(
        "Sua Conta foi Registrada! \n Nome: " +
          name +
          " \n Idade: " +
          age +
          "\n Genero: " +
          gender +
          "\n Limite Inicial: R$" +
          value +
          "\n Tipo de Conta: " +
          types
      );
    } else {
      alert("Preencha os Dados Corretamente");
    }
  };

  const clear = () => {
    setName("");
    setAge("");
    setSelectedGender("Masculino");
    setValue(0);
    setType(false);
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Text style={styles.title}>Abertura de Conta</Text>
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
          mode='dialog'
          style={{
            height: 30,
            width: 238,
            marginTop: 10,
            marginBottom: 20,
            backgroundColor: "#343732",
            color: "white",
          }}
          
          selectedValue={gender}
          onValueChange={setSelectedGender}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
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
          maximumValue={2000}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={value}
          onValueChange={setValue}
        />
      </div>
      <div>
        <Switch
          input="Estudante"
          style={styles.type}
          value={type}
          onValueChange={setType}
        />
        <Text style={{ fontSize: 16, color: "chartreuse", margin: 30 }}>
          Estudante
        </Text>
      </div>
      <div>
        <ProcessButton
          text="Processar"
          onPress={confirmarOperacao}
        ></ProcessButton>
        <ClearButton text="Limpar" onPress={clear}></ClearButton>
      </div>
    </SafeAreaView>
  );
}
