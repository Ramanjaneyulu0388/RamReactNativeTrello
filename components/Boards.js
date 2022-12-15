import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as APICall from "../api";
import AppBar from "./AppBar";
import Board from "./Board";
import BoardInput from "./BoardInput";

class Boards extends Component {
  state = { boards: [] };

  componentDidMount() {
    APICall.getBoards().then((data) => {
      const newBoards = data;
      this.setState({ boards: newBoards });
      console.log(this.state.boards[0]);
    });
  }

  hanldeInput = (text) => {
    APICall.createBoard(text).then((res) => {
      console.log("Final response is ");

      console.log(res.data.name);
      console.log(this.state.boards[0]);
      const finalBoards = [
        ...this.state.boards,
        { id: res.data.id, name: res.data.name, url: res.data.url },
      ];
      console.log("Final boards", finalBoards);
      this.setState({ boards: finalBoards });
    });
  };
  render() {
    return (
      <View style = {styles.mainContainer}>
        <AppBar style={styles.appbar} />
        <View style={styles.container}>
          {this.state.boards.map((each) => {
            return <Board boardDetails={each} key={each.id} />;
          })}
          <BoardInput hanldeInput={this.hanldeInput} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
flex:1
  },
  container: {
    flex: 1,
    backgroundColor: "#9bc1bc",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    height: "100%",
  },
  appbar: {
  width:'100%'

  },
});

export default Boards;
