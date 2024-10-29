import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "rgb(241, 126, 24)" },
        headerTitleAlign: "center",
        headerTitle: "Financial Notes",
        headerTintColor: "rgb(0, 0, 0)", //titulo del banner
        headerTitleStyle: {
          fontSize: 28,
        },
      }}
    />
  );
}
