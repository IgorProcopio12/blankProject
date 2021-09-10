import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Picker } from "react-native";
import "react-native-paper";

const styles = StyleSheet.create({
  button: {
    width: 150,
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "chartreuse",
  },

  crudButton: {
    border: 100,
    borderColor: 'white',
    width: 150,
    height: 30,
    margin:20,
    marginLeft: 120,
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "black",
    justifyContent: 'center',

  },

  clearButton: {
    width: 120,
    height: 30,
    borderColor: 'white',
    marginLeft: 135,
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "black",
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    textTransform: "uppercase",
    fontSize: 14,
    textAlign: "center",
  },

  view: {
    backgroundColor: "#262A2B",
    height: "90vh",
    alignItems: "center",
    justifyContent: "center",
  },

  safeView: {
    backgroundColor: "#262A2B",
    height: "100vh",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "chartreuse",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 140,
    marginBottom: 40,
  },

  input: {
    fontSize: "16px",
    borderColor: "gray",
    backgroundColor: "#343732",
    width: 340,
    height: 30,
    marginLeft: 20,
    padding: 5,
    display: 'flex',

  },

  label: {
    fontSize: 16,
    color: "chartreuse",
    margin: 30,
    
 
  },

  type: {
    justifyContent: 'right',
    height: 20,
    width: 40,
    marginTop: 5,
    marginLeft: 30,
    backgroundColor: '#black',
    
  }



});

export default styles;
