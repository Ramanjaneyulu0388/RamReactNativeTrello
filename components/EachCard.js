import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EachCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {props.eachCard.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 34,
    backgroundColor: "white",
    margin: 10,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 0.1,
    // Box shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  text: {
    marginLeft: 10,
  },
});

export default EachCard;
