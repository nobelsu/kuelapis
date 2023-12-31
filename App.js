import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./BlockRGB";
import DetailScreen from "./Details";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={addColor} style={{ marginRight: 100 }}>
          <Text> Add color</Text>
        </Pressable>
      ),
    });
  });

  function renderItem({ item }) {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Details", item);
        }}
        style={{
          aspectRatio: 1,
          flex: 0.25,
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
      <FlatList
        style={{ width: "100%" }}
        data={colorArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
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
