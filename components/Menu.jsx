import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Rutas() {
  return (
    <View className="w-full h-full bg-fn-1 justify-center items-center">
      <View className="w-11/12 h-5/6 justify-between items-center py-5">
        <View className="w-52 h-52 items-center">
          <Text className="text-2xl">INICIAR SESIÓN</Text>
        </View>

        <View className="gap-y-5">
          <Link asChild href="/home">
            <Pressable>
              <Text className="text-2xl">HISTORIAL</Text>
            </Pressable>
          </Link>
          <Link asChild href="/home">
            <Pressable>
              <Text className="text-2xl">OCULTAR VALORES</Text>
            </Pressable>
          </Link>
        </View>

        <Pressable>
          <Text className="text-2xl">INICIAR SESIÓN</Text>
        </Pressable>
      </View>
    </View>
  );
}
