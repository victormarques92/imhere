import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  position: number;
  name: string;
  onRemove: () => void;
};

export function Participant({ position, name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.position}>
        <Text style={styles.positionText}>
          {position.toString().padStart(2, "0")}
        </Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
