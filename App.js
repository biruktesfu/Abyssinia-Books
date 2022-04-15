import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'react-native';
import HomeScreen from "./Pages/HomeScreen";
import LibraryScreen from "./Pages/LibraryScreen";
import StoreScreen from "./Pages/StoreScreen";
import SettingsScreen from "./Pages/SettingsScreen";



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00bcd4" translucent = {true}/>
    </NavigationContainer>
  );
}
