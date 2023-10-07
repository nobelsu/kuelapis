import { View, Text, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  return (
    <View
      style={{
        backgroundColor: `rgb(${route.params.red}, ${route.params.green}, ${route.params.blue})`,
        flex: 1,
      }}
    >
      <Text style={styles.stuff}>Red: {route.params.red}</Text>
      <Text style={styles.stuff}>Green: {route.params.green}</Text>
      <Text style={styles.stuff}>Blue: {route.params.blue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stuff: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
});
