import React, { useState } from "react";
import { SearchBar,Card,Button,Icon} from "@rneui/themed";
import {Image,TextInput, ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert,Modal,Pressable,Dimensions, Settings} from "react-native";

function SettingsScreen() {
  const [actionTriggered, setActionTriggered] = useState('');
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
      paddingTop:20,  
      paddingBottom:20,
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
            <Text onPress={() => setModalVisible(!modalVisible)}style={{textAlign:"left", paddingLeft:10}}>back</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1,marginTop:10,marginBottom:10, marginRight:10,marginLeft:10}}/>
            <Text style={{alignItems:"center", padding:10, fontSize:17}}>
            This Ebook android application offers you
            the opportunity to have constant access to 
            hundreds of different books. The system also gives 
            you many options to set up the reading environment 
            according to your needs
            </Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1,marginTop:10,marginBottom:10, marginRight:10,marginLeft:10}}/>
          </View>
        </View>
      </Modal>

      <View style={{paddingLeft:20}}>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,marginBottom:10, marginRight:20}}/>

      <TouchableOpacity >
      <Text style={{fontSize:20, fontWeight:"bold"}}>Sign in</Text>
      </TouchableOpacity>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,marginTop:10,marginBottom:10, marginRight:20}}/>

      <TouchableOpacity >
      <Text style={{fontSize:20, fontWeight:"bold"}}>Settings</Text>
      </TouchableOpacity>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,marginTop:10,marginBottom:10, marginRight:20}}/>


      <TouchableOpacity onPress={() => {setModalVisible(true)}}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>info</Text>
      </TouchableOpacity>
      
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,marginTop:10,marginBottom:10, marginRight:20}}/>
  
      </View>

    </View>
  );


}


export default SettingsScreen;
