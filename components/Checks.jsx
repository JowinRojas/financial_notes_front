import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Bill from "./Bill";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";

export default function Checks() {
  const [modalVisible, setModalVisible] = useState(false);
  const db = SQLite.openDatabaseSync("checks.db");
  const [isLoading, setIsLoading] = useState(false);
  const [checks, setChecks] = useState([]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="">
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-80 p-5 bg-white rounded-lg shadow-lg items-center">
            <Text className="text-xl font-semibold mb-4">Nueva cuenta</Text>

            <TextInput
              className="w-full mt-4 px-4 py-2 text-lg rounded-lg"
              placeholder="Nombre de la cuenta"
              value={""}
            />

            <Pressable
              className="mt-2 px-4 py-2 bg-green-500 rounded"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-white text-lg">Guardar</Text>
            </Pressable>

            <Pressable
              className="mt-2 px-4 py-2 bg-red-500 rounded"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-white text-lg">Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View className="w-full justify-center items-center pb-5">
        <Bill />

        <View className="w-11/12 h-20 flex-row rounded-2xl mt-6 bg-fn-1">
          <Pressable
            className="w-full justify-center items-center"
            onPress={() => setModalVisible(true)}
          >
            <Text className="text-5xl">+</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
