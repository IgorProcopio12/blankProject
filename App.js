import { props } from "bluebird";

import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./screens/Home";
import Banco from "./screens/Banco";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import styles from "./styles/Styles";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen name="Banco" component={Banco} />

    </Stack.Navigator>
  );
}

export default function App() {
    return (
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      );
}
