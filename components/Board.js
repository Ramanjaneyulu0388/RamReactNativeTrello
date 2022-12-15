import React from "react";
import { View, Text } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

const Board = ({ boardDetails }) => {
  const myRef = React.useRef({});
  React.useEffect(() => {
    const styleObj = {
      borderWidth: 4,
      borderRadius: 4,
      borderColor: "#22D3EE",
    };
    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);
  console.log(boardDetails.name);
  return (
    <Box
      width="40%"
      bg="primary.500"
      p="4"
      m="1"
      shadow={2}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
      ref={myRef}
    >
      {boardDetails.name}
    </Box>
  );
};

export default Board;
