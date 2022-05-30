import React, { useState } from "react";
import { SearchBar,Card,Button,Icon} from "@rneui/themed";
import {Image,TextInput, ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert,Modal,Pressable,Dimensions} from "react-native";


function HomeScreen() {
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
      <View style={{flexDirection:"row"}}>

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
            <Text onPress={() => setModalVisible(!modalVisible)}style={{textAlign:"left", paddingLeft:10}}>back</Text>
            <View style={{flexDirection:"column", flex:1}}>
              <View style={{flex:1.2,flexDirection:"row"}}>
                <View style={{flex:0.7}}>

                  <View style={{flex:1, marginTop:15,marginBottom:15,marginLeft:10,marginRight:10}}>
                    <Image  
                        style={{flex:1,height:undefined, width:undefined}}
                        source={require('../assets/abc.jpg')}  
                    />  
                  </View>

                </View>

                <View style={{flex:1, flexDirection:"column", padding:10}}>
                  <View style={{flex:1}}>
                    <Text style={{fontWeight:"bold"}}>Book Title</Text>
                  </View>
                  <View style={{flex:1}}>
                    <Text style={{fontWeight:"bold"}}>Author name</Text>
                  </View>
                  <View style={{flex:1}}>
                    <Text style={{fontWeight:"bold"}}>Rating:</Text>
                  </View>
                  <View style={{flex:1,fontWeight:"bold"}}>
                    <Text> </Text>
                  </View>
                  <View style={{flex:1}}>
                    <Text  style={{fontWeight:"bold"}}>Price: 0.00</Text>
                  </View>

                </View>
              </View>


              <View style={{flex:2, flexDirection:"column", alignItems:"center", padding:20}}>
                <View style={{flex:1}}>
                <Button
                  buttonStyle={{flex: 0.8,borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"orange",}}
                  title='Buy This Book' onPress={() => console.log("hello")}/>
                </View>
                <View style={{flex:4}}>
                  <Text  style={{fontWeight:"bold", fontSize:18}}> Description</Text>
                  <Text>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem 
                  Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it
                   to make a type specimen book. It has survived
                  not only five centuries, but also the leap 
                  into electronic typesetting, remaining 
                  essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Text style={{paddingTop:20, paddingLeft:20}}>Most read books</Text>
      <ScrollView horizontal={true} style={[styles.container, {padding:0,paddingBottom:19 },]} >
        <TouchableOpacity onPress={() => {setModalVisible(true)}}>
        <Card height={200} containerStyle={{backgroundColor:"#d1d1d1", borderColor:"#d1d1d1"}}>
        
          <Card.Image 
          source={require("../assets/abc.jpg")} 
          style={{width:150, height:150}}
          />


        </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setModalVisible(true)}}>
        <Card height={200} containerStyle={{backgroundColor:"#d1d1d1", borderColor:"#d1d1d1"}}>
        
          <Card.Image 
          source={require("../assets/abc.jpg")} 
          style={{width:150, height:150}}
          />


        </Card>
        </TouchableOpacity>

      </ScrollView>
    </ScrollView>
    </View>
  );


}


export default HomeScreen;
