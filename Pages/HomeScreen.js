import React, { useState } from "react";
import { SearchBar,Card,Button,Icon} from "@rneui/themed";
import {Image,TextInput, ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert,Modal,Pressable} from "react-native";
function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:5
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      height:700,
      width:335,
      backgroundColor: "white",
      borderRadius: 20,
      padding:20,  
      fontWeight:"bold",    
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });


  return (
    <View>
      <View 
      style={{flexDirection:"row"}}>

        <View style={[styles.container,{flexDirection: "row", margin:10}]}>
            <TextInput 
                  style={{backgroundColor:"#d1d1d1",flex:1, padding:5, marginRight:10}}
                  placeholder="type here..."
                  onchangeText={newText => setText(newText)}
                  defaultValue={text}

            />

        <View style={{ borderColor:"red", borderStyle:"solid"}}><Icon name='caching'/></View> 
        </View>
        


      </View>

    
    
    <ScrollView>

      {/*View for the welcome text*/}

      <View> 
        <Text style={{textAlign:"center"}}>Welcome to Abyssinia Books</Text>
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text onPress={() => setModalVisible(!modalVisible)}style={{textAlign:"left"}}>back</Text>
          </View>
        </View>
      </Modal>

      <Text style={{paddingTop:20, paddingLeft:20}}>Most read books</Text>
      <ScrollView horizontal={true} style={[styles.container, {padding:0,paddingBottom:19 },]} >
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Card height={200} containerStyle={{backgroundColor:"#d1d1d1", borderColor:"#d1d1d1"}}>
        
          <Card.Image 
          source={require("../assets/abc.jpg")} 
          style={{width:150, height:150}}
          />

          <Card.Title>title</Card.Title>
          {/* <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' /> */}
        </Card>
        </TouchableOpacity>

      </ScrollView>
    </ScrollView>
    </View>
  );


}


export default HomeScreen;
