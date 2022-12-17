import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VStack,
  HStack,
  Button,
  Input,
  FormControl,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";

function ListInput(props) {
  const [input, setInput] = React.useState("");
 // console.log(props);
  const handleSubmit = () => {
    props.onSubmit(input);
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Listname" onChangeText={(text) => setInput(text)} style = {styles.input}/>
      <Button mt="5" colorScheme="cyan" onPress={handleSubmit}>
        Add List
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginTop:10,
    padding:10
  },
  input:{
    backgroundColor:"white"
  }
});

export default ListInput;
