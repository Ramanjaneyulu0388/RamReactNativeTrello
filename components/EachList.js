import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import EachCard from "./EachCard";
import * as APICall from "../api";

// This is listItem
//Object {
//     "closed": false,
//     "id": "639c427f7bc90201e0e02bb5",
//     "idBoard": "62e7b956594f1c8fa5285791",
//     "name": "newList3",
//     "pos": 147456,
//     "softLimit": null,
//     "subscribed": false,
//   }

function EachList(props) {
  const [cards, setCards] = React.useState([]);
  useEffect(() => {
    APICall.getCardsInAList(props.listItem.id).then((data) => {
      //console.log("______ Starts Here --------");
      //console.log("this is cards array", data);
      setCards(data);
    });
  }, []);
  //console.log(props.listItem);
  return (
    <View style={styles.listContainer}>
      <Text style={styles.header}> {props.listItem.name}</Text>

      {cards.map((eachCard) => {
        return (
          <View key={eachCard.id}>
            <EachCard eachCard={eachCard} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  listContainer: {
    padding: 9,
    width: 300,
    backgroundColor: "#e0d8de",
    margin: 15,

    borderRadius: 10,

    // box shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  header: {
    color: "black",
    fontSize: 29,
    fontWeight: "bold",
  },
});

export default EachList;
