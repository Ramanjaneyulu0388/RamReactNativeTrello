import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import * as APICall from "../api";
import EachList from "./EachList";
import ListInput from "./ListInput";

class Lists extends React.Component {
  state = { lists: [] };
  componentDidMount() {
    const boardId = this.props.route.params.boardId;

    APICall.getLists(boardId).then((res) => {
      this.setState({ lists: res });
     
    });
  }

  onSubmit = (name) => {
   // console.log("I got it", name);
    APICall.createList(name, this.props.route.params.boardId).then((res) => {
      console.log(res.data);
      const newLists = [...this.state.lists,res.data]
      this.setState({lists:newLists})
    });
  };

  render() {
    return (
      <ScrollView style={styles.mainContainer} horizontal={true}>
        {this.state.lists.map((eachList) => {
          return <EachList key={eachList.id} listItem={eachList} />;
        })}
        <ListInput onSubmit={this.onSubmit} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // flexDirection: "row",
    // justifyContent:"center"
    padding: 30,
    backgroundColor:'#c76d7e'
  },
  listContainer: {
    minHeight: 100,
    width: 300,
    backgroundColor: "red",
    margin: 9,
   
  },
});

export default Lists;
