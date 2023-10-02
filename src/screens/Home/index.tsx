import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

dayjs.extend(localizedFormat);
dayjs.locale(ptBR);

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    const newParticipant = participantName.trim();

    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome"
      );
    }

    setParticipants((prevState) => [...prevState, newParticipant]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover participante",
      `Deseja remover o participante ${name}?`,
      [
        {
          text: "Não",
          style: "destructive",
        },
        {
          text: "Sim",
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            ),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Bem vindo ao meu primeiro app!</Text>
      <Text style={styles.eventDate}>
        {dayjs().format("dddd, DD [de] MMMM [de] YYYY").toUpperCase()}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
          autoCapitalize="characters"
        />

        <TouchableOpacity
          style={
            participantName.trim() === ""
              ? styles.buttonDisabled
              : styles.button
          }
          onPress={handleParticipantAdd}
          disabled={participantName === ""}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Participant
            key={item}
            position={index + 1}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante encontrado.
          </Text>
        )}
      />
    </View>
  );
}
