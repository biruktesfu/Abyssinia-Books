import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'react-native';
import HomeScreen from "./Pages/HomeScreen";
import LibraryScreen from "./Pages/LibraryScreen";
import StoreScreen from "./Pages/StoreScreen";
import SettingsScreen from "./Pages/SettingsScreen";
// import { createStackNavigator } from '@react-navigation/stack';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Store" component={StoreScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00bcd4" translucent = {true}/>
    </NavigationContainer>
  );
}
