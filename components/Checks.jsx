import { ScrollView, View } from "react-native";
import Bill from "./Bill";

export default function Checks() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full">
      <View className="w-full justify-center items-center pb-5">
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
      </View>
    </ScrollView>
  );
}
