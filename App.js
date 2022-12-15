import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Boards from "./components/Boards";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  
  return (
    <NativeBaseProvider>
  <Boards/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
