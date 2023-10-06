import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import BlockRGB from "./BlockRGB";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

var data = [];
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <View>
      <View>
        <Button>Add colour</Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
