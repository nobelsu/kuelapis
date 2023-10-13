import { View } from "react-native";

export default function BlockRGB(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
      }}
    />
  );
}
