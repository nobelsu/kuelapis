import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./BlockRGB";
import DetailScreen from "./Details";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([]);

  function renderItem({ item }) {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Details", item);
        }}
      >
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />
      </Pressable>
    );
  }

  function addColor() {
    setColorArray([
      ...colorArray,
      {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255),
        id: colorArray.length,
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={addColor}>
        <Text> Add new color</Text>
      </Pressable>
      <FlatList
        style={{ width: "100%" }}
        data={colorArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
