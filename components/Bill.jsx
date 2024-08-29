import { Pressable, Text, View } from "react-native";
import { DetailMenuIcon } from "./Icons";

export default function Bill() {
  return (
    <View className="w-11/12 h-20 flex-row rounded-2xl mt-6 bg-fn-1">
      <Pressable className="w-10/12 justify-around">
        <Text className="text-2xl pl-2 ">NOMBRE</Text>
        <Text className="text-3xl pl-2">$ 1'156.234.67</Text>
      </Pressable>
      <View className="w-2/12 h-full justify-center items-center">
        <DetailMenuIcon color="#000000" />
      </View>
    </View>
  );
}
