import React, { useState } from "react";
import { SearchBar,Card,Button,Icon} from "@rneui/themed";
import {Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
import {StackRouter} from "react-navigation";

function HomeScreen() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20
    }
  })


  return (

    <ScrollView>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />

      {/*View for the welcome text*/}

      <View> 
        <Text style={{textAlign:"center"}}>Welcome to Abyssinia Books</Text>
      </View>

      <Text style={{paddingTop:20, paddingLeft:20}}>Most read books</Text>
      <ScrollView horizontal={true} style={[styles.container, {backgroundColor:"#d1d1d1", padding:0},]} >
        <TouchableOpacity onPress={() => Alert.alert("clicked")}>
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


        <TouchableOpacity onPress={() => Alert.alert("clicked")}>
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

        <TouchableOpacity onPress={() => Alert.alert("clicked")}>
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
  );


}


export default HomeScreen;
