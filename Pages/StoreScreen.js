import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { Text, View, StyleSheet } from "react-native";

function StoreScreen() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems:"stretch" }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <Text>Store</Text>
    </View>
  );
}

export default StoreScreen;
