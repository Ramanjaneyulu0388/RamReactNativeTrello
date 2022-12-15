import React ,{useState} from 'react'
import {View } from 'react-native'

import {
    NativeBaseProvider,
    Text,
    Box,
    AspectRatio,
   Button,
    Stack,
    Center,
  Input,    
    HStack,
    Modal,FormControl
  } from "native-base";

  import * as APICall from "../api";


const BoardInput = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [text,setText] = useState('')
   
    const handleCreateBoard =(text) => {

        props.hanldeInput(text)

        
       
  }

    return <Center width="40%">
        <Button onPress={() => setShowModal(true)}>Add Board</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Add Board</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input onChangeText={newText => setText(newText)}/>
              </FormControl>
             
            </Modal.Body>  
            <Modal.Footer> 
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setShowModal(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={(e) => {
                   handleCreateBoard(text)
                setShowModal(false);
               
              }}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>;
  };

  export default BoardInput