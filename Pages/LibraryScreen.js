import React, { useState } from "react";
import { SearchBar,Card } from "@rneui/themed";
import { Text, View, StyleSheet,ScrollView,TouchableOpacity, Alert } from "react-native";

function LibraryScreen() {
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
    <ScrollView horizontal={false}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <ScrollView horizontal={true} style={[styles.container, {backgroundColor:"#d1d1d1", padding:0,paddingBottom:19 },]} >
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

export default LibraryScreen;
