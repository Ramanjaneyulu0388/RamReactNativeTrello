import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Boards from "./components/Boards";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lists from "./components/Lists";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Boards" component={Boards} />
          <Stack.Screen name="Lists" component={Lists} />
        </Stack.Navigator>

     
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9bc1bc",
    alignItems: "center",
    justifyContent: "center",
  },
});
