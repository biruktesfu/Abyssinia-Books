import React, { useState } from "react";
import { SearchBar,Card,Button,Icon} from "@rneui/themed";
import {Image,TextInput, ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
function HomeScreen() {
  const [text, setText] = useState('');
  const updateSearch = (search) => {
    setSearch(search);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:5
    }
  })


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

      <Text style={{paddingTop:20, paddingLeft:20}}>Best sellers in abyssinia books </Text>
      <ScrollView horizontal={true} style={[styles.container, {padding:0,paddingBottom:19 },]} >
        <TouchableOpacity onPress={() => Alert.alert("clicked")}>
        <Card height={200} containerStyle={{backgroundColor:"#d1d1d1", borderColor:"#d1d1d1"}}>
        
          <Card.Image 
          source={require("../assets/abc.jpg")} 
          style={{width:150, height:150}}
          />
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
