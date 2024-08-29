import { Link, Stack } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View className="W-full h-full justify-center items-center bg-fn-1">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="border-2 w-10/12 h-1/6 justify-center items-center">
        <Text>Login Screen</Text>
        <TextInput
          className="w-10/12 border-2 rounded-lg pl-2"
          placeholder="Usuario"
        />
        <TextInput
          className="w-10/12 border-2 rounded-lg pl-2"
          placeholder="Clave"
        />
        <Link asChild href={"/home"}>
          <Pressable>
            <Text className="text-2xl">Ingresar</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
